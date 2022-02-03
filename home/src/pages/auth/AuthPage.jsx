import { useTranslation } from 'next-i18next';
import AuthFrame from '../../components/Forms/AuthFrame';
import clsx from 'clsx';
import { Icon, Button, Typography } from '@mui/material';
import link from '../../../public/text/link';
import TitleWithDesc from '../../components/Title/TitleWithDesc';
import formStyles from '../../components/Forms/form-style';
import LoginForm from '../../components/Forms/LoginForm';
import { useState } from 'react';
import RegisterForm from '../../components/Forms/RegisterForm';
import SocialAuth from '../../components/Forms/SocialAuth';

export default function AuthPage(props) {
  const { t } = useTranslation('auth');
  const classes = formStyles();
  const { router } = props;
  const [componentToMount, setComponentToMount] = useState(
    router.asPath.slice(1)
  );

  return (
    <div>
      <AuthFrame
        {...props}
        title={
          componentToMount == 'login' ? t('login_title') : t('register_title')
        }
        subtitle={
          componentToMount == 'login'
            ? t('login_subtitle')
            : t('register_subtitle')
        }>
        <div>
          <div className={classes.head}>
            <TitleWithDesc
              head={componentToMount == 'login' ? t('login') : t('register')}
              desc=''
              align='left'
              color='secondary'
            />
            <Button
              size='small'
              onClick={() => {
                componentToMount == 'login'
                  ? setComponentToMount('register')
                  : setComponentToMount('login');
              }}>
              <Icon className={clsx(classes.icon, classes.signArrow)}>
                arrow_forward
              </Icon>
              {componentToMount == 'login'
                ? t('login_create')
                : t('register_already')}
            </Button>
          </div>
          <SocialAuth />
          <div className={classes.separator}>
            <Typography>{t('login_or')}</Typography>
          </div>
          {componentToMount == 'login' ? (
            <LoginForm {...props} />
          ) : (
            <RegisterForm {...props} />
          )}
        </div>
      </AuthFrame>
    </div>
  );
}
