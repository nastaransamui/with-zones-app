import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import topbarStyle from './topbar-style';
import { useTranslation } from 'next-i18next';
import { useSelector, useDispatch } from 'react-redux';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckIcon from '@mui/icons-material/Check';
import { langName } from '../../../public/text/langNames';
import { setCookies } from 'cookies-next';
import { useTheme } from '@mui/material/styles';
import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Popover,
  Switch,
  Typography,
} from '@mui/material';

export default function Settings(props) {
  const { i18n, t } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { adminThemeType } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = topbarStyle();
  const theme = useTheme();
  const handleChangeMode = (e) => {
    localStorage.setItem(
      'adminThemeType',
      e.target.value == 'light' ? 'dark' : 'light'
    );
    dispatch({
      type: 'ADMIN_THEMETYPE',
      payload: e.target.value == 'light' ? 'dark' : 'light',
    });
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeLang = (lang) => {
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang.LangCode);
  };

  const rtlActive = i18n.languaguage == 'fa';
  return (
    <div className={classes.setting}>
      <IconButton
        aria-describedby={id}
        onClick={handleClick}
        className={clsx(
          classes.icon,
          open && classes.active,
        )}>
        <SettingsIcon fontSize='inherit'className={
              classes.headerLinksSvg +
              ' ' +
              (rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links)
            } style={{fill: theme.palette.type == 'light' ? '#707070' : "#ffffff"}}/>
      </IconButton>
      <Popover
        disableScrollLock
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          paper: classes.paper,
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <List
          component='nav'
          className={classes.modeMenu}
          aria-label='Mode-menu'
          subheader={
            <ListSubheader component='div'>
              {t('header').header_theme}
            </ListSubheader>
          }>
          <ListItem>
            <Typography component='div'>
              <Grid component='label' container alignItems='center' spacing={1}>
                <Grid item>
                  {i18n.language !== 'fa'
                    ? t('header').header_light
                    : t('header').header_dark}
                </Grid>
                <Grid item>
                  <Switch
                    checked={adminThemeType == 'dark'}
                    onChange={handleChangeMode}
                    value={adminThemeType}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>
                  {i18n.language !== 'fa'
                    ? t('header').header_dark
                    : t('header').header_light}
                </Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List
          component='nav'
          className={classes.langMenu}
          aria-label='Language-menu'
          subheader={
            <ListSubheader component='div'>
              {t('header').header_language}
            </ListSubheader>
          }>
          {langName.map((item, i) => {
            return (
              <ListItem
                key={i.toString()}
                role={undefined}
                dense
                button
                onClick={() => handleChangeLang(item)}
                style={{
                  display: 'flex',
                  flexDirection:
                    theme.direction == 'rtl' ? 'row-reverse' : 'row',
                }}>
                <img
                  src={`/admin/images/langs/${item.Flag}`}
                  alt={item.Lang}
                  style={{ width: 20, height: 20 }}
                />{' '}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <ListItemText primary={item[`title_${i18n.language}`]} />
                {i18n.language === item.LangCode && (
                  <ListItemSecondaryAction>
                    <CheckIcon color='primary' />
                  </ListItemSecondaryAction>
                )}
              </ListItem>
            );
          })}
        </List>
      </Popover>
    </div>
  );
}

Settings.propTypes = {
  invert: PropTypes.bool,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.object.isRequired,
};

Settings.defaultProps = {
  invert: false,
};
