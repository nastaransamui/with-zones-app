import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { removeCookies } from 'cookies-next';
import {
  MenuItem,
  MenuList,
  ClickAwayListener,
  Paper,
  Grow,
  Hidden,
  Popper,
  Divider,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { langName } from '../../../../public/text/langNames';
import NavbarLinkStyles from './navbar-link-style';
import Settings from '../../../components/topbar/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useHistory } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '@mui/material/styles';

const AdminNavbarLinks = (props) => {
  const classes = NavbarLinkStyles();
  const history = useHistory();
  const router = useRouter();
  const [openNotification, setOpenNotification] = React.useState(null);
  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const [openProfile, setOpenProfile] = React.useState(null);
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };
  const [openSettings, setOpenSettings] = React.useState(null);
  const handleClickSettings = (event) => {
    if (openSettings && openSettings.contains(event.target)) {
      setOpenSettings(null);
    } else {
      setOpenSettings(event.currentTarget);
    }
  };

  const handleCloseSetting = () => {
    setOpenSettings(null);
  };

  const { i18n, t } = props;
  const rtlActive = i18n.languaguage == 'fa';
  const { adminThemeType } = useSelector((state) => state);
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleChangeMode = (e) => {
    localStorage.setItem(
      'adminThemeType',
      theme.palette.type == 'light' ? 'dark' : 'light'
    );
    dispatch({
      type: 'ADMIN_THEMETYPE',
      payload: theme.palette.type == 'light' ? 'dark' : 'light',
    });
  };
  const handleChangeLang = (lang) => {
    localStorage.setItem('i18nextLng', lang);
    i18n.changeLanguage(lang.LangCode);
  };
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive,
  });
  const wrapper =
    classes.wrapper +
    ' ' +
    classNames({
      [classes.wrapperRTL]: rtlActive,
    });
  const managerClasses = classNames({
    [classes.managerClasses]: true,
  });

  return (
    <div className={wrapper}>
      <IconButton
        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
        classes={{ label: rtlActive ? classes.labelRTL : '' }}
        onClick={() => {
          history.push('/admin/dashboard');
        }}>
        <DashboardIcon
          className={
            classes.headerLinksSvg + ' ' + rtlActive
              ? classes.links + ' ' + classes.linksRTL
              : classes.links
          }
        />
        <Hidden smUp implementation='css'>
          <span className={classes.linkText}>{t('title')}</span>
        </Hidden>
      </IconButton>
      <div className={managerClasses}>
        <IconButton
          aria-label='Notifications'
          aria-owns={openNotification ? 'notification-menu-list' : null}
          aria-haspopup='true'
          onClick={handleClickNotification}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          classes={{ label: rtlActive ? classes.labelRTL : '' }}>
          <NotificationsIcon
            className={
              classes.headerLinksSvg +
              ' ' +
              (rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links)
            }
          />
          <span className={classes.notifications}>5</span>
          <Hidden smUp implementation='css'>
            <span
              onClick={handleClickNotification}
              className={classes.linkText}>
              {t('notification')}
            </span>
          </Hidden>
        </IconButton>
        <Popper
          open={Boolean(openNotification)}
          anchorEl={openNotification}
          transition
          disablePortal
          placement='bottom'
          className={classNames({
            [classes.popperClose]: !openNotification,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true,
          })}>
          {({ TransitionProps }) => {
            return (
              <Grow
                {...TransitionProps}
                id='notification-menu-list'
                style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={handleCloseNotification}>
                    <MenuList role='menu'>
                      <MenuItem
                        onClick={handleCloseNotification}
                        className={dropdownItem}>
                        {rtlActive
                          ? 'إجلاء أوزار الأسيوي حين بل, كما'
                          : 'Mike John responded to your email'}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            );
          }}
        </Popper>
      </div>
      <div className={managerClasses}>
        <IconButton
          aria-owns={openProfile ? 'profile-menu-list' : null}
          aria-haspopup='true'
          onClick={handleClickProfile}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          classes={{ label: rtlActive ? classes.labelRTL : '' }}>
          <PersonIcon
            className={
              classes.headerLinksSvg +
              ' ' +
              (rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden smUp implementation='css'>
            <span onClick={handleClickProfile} className={classes.linkText}>
              {t('Profile')}
            </span>
          </Hidden>
        </IconButton>
        <Popper
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          placement='bottom'
          className={classNames({
            [classes.popperClose]: !openProfile,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true,
          })}>
          {({ TransitionProps }) => {
            return (
              <Grow
                {...TransitionProps}
                id='profile-menu-list'
                style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={handleCloseProfile}>
                    <MenuList role='menu'>
                      <MenuItem
                        onClick={handleCloseProfile}
                        className={dropdownItem}>
                        {t('Profile')}
                      </MenuItem>
                      <Divider light />
                      <MenuItem
                        onClick={() => {
                          handleCloseProfile();
                          removeCookies('adminAccessToken');
                          dispatch({
                            type: 'ADMIN_ACCESS_TOKEN',
                            payload: null,
                          });
                          router.push('/');
                        }}
                        className={dropdownItem}>
                        {t('Log out')}
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            );
          }}
        </Popper>
      </div>
      <div className={managerClasses}>
        {/* <Settings t={t} i18n={i18n} /> */}
        <IconButton
          aria-owns={openSettings ? 'settings-menu-list' : null}
          aria-haspopup='true'
          onClick={handleClickSettings}
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          classes={{ label: rtlActive ? classes.labelRTL : '' }}>
          <LanguageIcon
            className={
              classes.headerLinksSvg +
              ' ' +
              (rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden smUp implementation='css'>
            <span onClick={handleClickSettings} className={classes.linkText}>
            {t('header').header_language}
            </span>
          </Hidden>
        </IconButton>
        <Popper
          open={Boolean(openSettings)}
          anchorEl={openSettings}
          transition
          disablePortal
          placement='bottom'
          className={classNames({
            [classes.popperClose]: !openSettings,
            [classes.popperResponsive]: true,
            [classes.popperNav]: true,
          })}>
          {({ TransitionProps }) => {
            return (
              <Grow
                {...TransitionProps}
                id='settings-menu-list'
                style={{ transformOrigin: '0 0 0' }}>
                <Paper className={classes.dropdown} >
                  <ClickAwayListener onClickAway={handleCloseSetting}>
                    <List
                      component='nav'
                      className={classes.langMenu}
                      aria-label='Language-menu'>
                      {langName.map((item, i) => {
                        return (
                          <ListItem
                            key={i.toString()}
                            role={undefined}
                            dense
                            button
                            className={dropdownItem + ' ' + classes.languagePack}
                            onClick={() => handleChangeLang(item)}
                            style={{
                              
                            }}>
                            <img
                              src={`/admin/images/langs/${item.Flag}`}
                              alt={item.Lang}
                              style={{ width: 20, height: 20 }}
                            />{' '}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <ListItemText
                              primary={item[`title_${i18n.language}`]}
                            />
                            {i18n.language === item.LangCode && (
                              <ListItemSecondaryAction>
                                <CheckIcon color='primary' />
                              </ListItemSecondaryAction>
                            )}
                          </ListItem>
                        );
                      })}
                    </List>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            );
          }}
        </Popper>
      </div>
      <IconButton
        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
        classes={{ label: rtlActive ? classes.labelRTL : '' }}
        onClick={handleChangeMode}>
        {theme.palette.type == 'dark' ? (
          <DarkModeIcon
            className={
              classes.headerLinksSvg + ' ' + rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links
            }
          />
        ) : (
          <LightModeIcon
            className={
              classes.headerLinksSvg + ' ' + rtlActive
                ? classes.links + ' ' + classes.linksRTL
                : classes.links
            }
          />
        )}
        <Hidden smUp implementation='css'>
          <span className={classes.linkText}>
            {i18n.language !== 'fa'
              ? t('header').header_dark
              : t('header').header_light}
          </span>
        </Hidden>
      </IconButton>
    </div>
  );
};

export default AdminNavbarLinks;
