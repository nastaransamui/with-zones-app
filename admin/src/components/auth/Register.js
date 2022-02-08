import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/core/Button';
import Icon from '@mui/material/core/Icon';
import clsx from 'clsx';
import Typography from '@mui/material/core/Typography';
import useMediaQuery from '@mui/material/core/useMediaQuery';
import { useTheme } from '@mui/material/core/styles';
import FormControlLabel from '@mui/material/core/FormControlLabel';
import Checkbox from '@mui/material/core/Checkbox';
import Grid from '@mui/material/core/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { useText } from '~/theme/common';
import SocialAuth from './SocialAuth';
import Title from '../Title/Title';
import AuthFrame from '../Forms/AuthFrame';
import useStyles from './auth-style';

function Register(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { t } = props;
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame
      title={t('common:register_title')}
      subtitle={t('common:register_subtitle')}>
      <div>
        <div className={classes.head}>
          <Title align={isMobile ? 'center' : 'left'}>
            {t('common:register')}
          </Title>
          <Button
            size='small'
            className={classes.buttonLink}
            href={routeLink.movie.login}>
            <Icon className={clsx(classes.icon, classes.signArrow)}>
              arrow_forward
            </Icon>
            {t('common:register_already')}
          </Button>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>{t('common:register_or')}</Typography>
        </div>
        <ValidatorForm
          onError={(errors) => console.log(errors)}
          onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant='filled'
                className={classes.input}
                label={t('common:register_name')}
                onChange={handleChange('name')}
                name='name'
                value={values.name}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant='filled'
                className={classes.input}
                label={t('common:register_email')}
                onChange={handleChange('email')}
                name='email'
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant='filled'
                type='password'
                className={classes.input}
                label={t('common:register_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name='password'
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant='filled'
                type='password'
                className={classes.input}
                label={t('common:register_confirm')}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'this field is required']}
                onChange={handleChange('confirmPassword')}
                name='confirm'
                value={values.confirmPassword}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color='secondary'
                  value={check}
                  className={classes.check}
                />
              }
              label={
                <span className={text.caption}>
                  {t('common:form_terms')}
                  &nbsp;
                  <a href='#'>{t('common:form_privacy')}</a>
                </span>
              }
            />
            <Button
              variant='contained'
              type='submit'
              color='secondary'
              size='large'>
              {t('common:continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}

Register.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Register;
