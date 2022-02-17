/* eslint-disable @next/next/no-img-element */
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
// import classes from './Topbar.module.css';

import { useState, useEffect } from 'react';
import topbarStyle from './topbar-style';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';
import brand from '../../../public/text/brand';
import { langName } from '../../../public/text/langNames';
import { useTranslation } from 'react-i18next';
import Settings from './Settings';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';
function Topbar({ drawerOpen, handleDrawer, router }) {
  const classes = topbarStyle();
  const [isScrolled, setIsScrolled] = useState(false);
  const [profilePic, setProfilePic] = useState('');
  const { t, i18n } = useTranslation('dashboard');

  const history = useHistory();
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
    }
    return () => {
      isMount = false;
      window.onscroll = null;
    };
  }, []);

  // useEffect(() => {
  //   let isMount = true;
  //   if (isMount) {
  //     if (process.env.NODE_ENV == 'development') {
  //       setProfilePic(`/users/${user?.profileRoot}/${user?.profilePic}`);
  //     } else {
  //       setProfilePic(
  //         `${location.origin}/public/users/${user?.profileRoot}/${user?.profilePic}`
  //       );
  //     }
  //   }
  //   return () => {
  //     isMount = false;
  //   };
  // }, [user]);

  const settings = (e) => {};
  const singOut = (e) => {
    // logOut(dispatch, user._id);
  };

  const LanguageClicked = (lang) => {
    // localStorage.setItem('lang', lang.LangCode);
    // i18n.changeLanguage(lang.LangCode);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position='sticky'
        className={clsx(classes.appBar, {
          [classes.scrolled]: isScrolled,
        })}>
        <Toolbar className={classes.topbarWrapper}>
          <IconButton
            onClick={() => handleDrawer()}
            className={clsx(
              'hamburger hamburger--spin',
              classes.mobileMenu,
              drawerOpen && 'is-active'
            )}>
            <span className='hamburger-box'>
              <span className={clsx(classes.bar, 'hamburger-inner')} />
            </span>
          </IconButton>
          <img
            src='/admin/images/logo.png'
            alt='logo'
            style={{ height: 35, width: 35, marginLeft: 20, cursor: 'pointer' }}
            onClick={() => history.push('/admin/dashboard')}
          />
          <Typography
            variant='h6'
            noWrap
            onClick={() => history.push('/admin/dashboard')}
            className={classes.topLeft}>
            {brand[`name_${i18n.language}`]}
          </Typography>

          <div className={classes.topRight}>
            <div className={classes.topbarIconContainer}>
              <Settings t={t} i18n={i18n} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

Topbar.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
};

export default Topbar;
