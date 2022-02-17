import React, { createRef, useState } from 'react';
import proStyle from './prodashboard';
import brand from '../../../../public/text/brand';
import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Icon,
} from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Link,
} from 'react-router-dom';
import ThemeUser from '../../../components/ThemeUser/ThemeUser';
import {
  NotFunctionPage,
  CustomSwitch,
} from '../SampleDashboard/SampleDashboard';
import NotFound from '../NotFound';
import clsx from 'clsx';
import { MoreVert, ViewList, Menu } from '@mui/icons-material';
import cx from 'classnames';
import useNavigatorPlatform from '../../../components/Hooks/useNavigatorPlatform';
import Settings from '../../../components/topbar/Settings';
import AdminNavbarLinks from './AdminNavbarLinks';
import MainDashboard from '../../../components/mainDashboard/MainDashboard';

export default function ProDashboard(props) {
  const { t, i18n } = props;
  const mainPanel = createRef();
  const classes = proStyle();
  const location = useLocation();
  const navigatorPlatform = useNavigatorPlatform();
  const getActiveRoute = (routes) => {
    let activeRoute = brand[`name_${i18n.language}`];
  for (let i = 0; i < routes.length; i++){
    if(!routes[i].collapse){
      if(routes[i].layout.concat(routes[i].path) == location.pathname){
        return routes[i][`name_${i18n.language}`]
      }
    }else{
      for( let j = 0; j < routes[i].views.length; j++){
        if(!routes[i].views[j].collapse){
          if(routes[i].views[j].layout.concat(routes[i].views[j].path) == location.pathname){
            return routes[i].views[j][`name_${i18n.language}`]
          }
        }else{
          for(let k = 0; k < routes[i].views[j].views.length; k++){
            if(!routes[i].views[j].views[k].collapse){
              if(routes[i].views[j].views[k].layout.concat(routes[i].views[j].views[k].path) == location.pathname){
                return routes[i].views[j].views[k][`name_${i18n.language}`]
              }
            }
          }
        }
      }
    }
  }
  return activeRoute;
  };
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  const getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: getCollapseInitialState(prop.views),
          ...getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };

  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.jsx - route /admin/regular-forms
  const getCollapseInitialState = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (props.router.pathname.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  };

  const [state, setState] = useState({
    miniActive: true,
    openAvatar: false,
    // ...getCollapseStates(props.routes)
  });

  const rtlActive = i18n.language == 'fa';
  const drawerPaper =
    classes.drawerPaper +
    ' ' +
    cx({
      [classes.drawerPaperMini]: !props.miniActive && state.miniActive,
    });
  const sidebarWrapper =
    classes.sidebarWrapper +
    ' ' +
    cx({
      [classes.drawerPaperMini]: !props.miniActive && state.miniActive,
      [classes.sidebarWrapperWithPerfectScrollbar]: false,
      // navigator.platform.indexOf("Win") > -1,
    });
  const bgColor = 'black';
  const color = 'primary';
  const appBarClasses = cx({
    [' ' + classes[color]]: color,
  });
  const sidebarMinimize =
    classes.sidebarMinimize +
    ' ' +
    cx({
      // [classes.sidebarMinimizeRTL]: rtlActive,
      [classes.sidebarHandlemainOpen]: props.miniActive,
      [classes.sidebarHandlemainClose]: !props.miniActive,
    });
  const mainPanelClasses =
    classes.mainPanel +
    ' ' +
    cx({
      [classes.mainPanelSidebarMini]: props.miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigatorPlatform.indexOf('Win') > -1,
    });
  const userWrapperClass =
    classes.user +
    ' ' +
    cx({
      [classes.whiteAfter]: bgColor === 'white',
    });
  const photo =
    classes.photo +
    ' ' +
    cx({
      [classes.photoRTL]: rtlActive,
    });

  const openCollapse = (collapse) => {
    var st = {};
    st[collapse] = !state[collapse];
    setState((oldState) => ({ ...oldState, ...st }));
  };

  const caret =
    classes.caret +
    ' ' +
    cx({
      [classes.caretRTL]: rtlActive,
    });

  const itemText =
    classes.itemText +
    ' ' +
    cx({
      [classes.itemTextMini]: !props.miniActive && state.miniActive,
      [classes.itemTextMiniRTL]:
        rtlActive && !props.miniActive && state.miniActive,
      [classes.itemTextRTL]: rtlActive,
    });

  const collapseItemMini =
    classes.collapseItemMini +
    ' ' +
    cx({
      [classes.collapseItemMiniRTL]: rtlActive,
    });

  const collapseItemText =
    classes.collapseItemText +
    ' ' +
    cx({
      [classes.collapseItemTextMini]: !props.miniActive && state.miniActive,
      [classes.collapseItemTextMiniRTL]:
        rtlActive && !props.miniActive && state.miniActive,
      [classes.collapseItemTextRTL]: rtlActive,
    });

  var user = (
    <div className={userWrapperClass}>
      <div className={photo}>
        <img
          src='/admin/images/faces/avatar.jpg'
          className={classes.avatarImg}
          alt='...'
        />
      </div>
      <List className={classes.list}>
        <ListItem className={classes.item + ' ' + classes.userItem}>
          <a
            href={'#'}
            className={classes.itemLink + ' ' + classes.userCollapseButton}
            onClick={() => openCollapse('openAvatar')}>
            <ListItemText
              primary={rtlActive ? 'تانيا أندرو' : 'Tania Andrew'}
              secondary={
                <b
                  className={
                    caret +
                    ' ' +
                    classes.userCaret +
                    ' ' +
                    (state.openAvatar ? classes.caretActive : '')
                  }
                />
              }
              disableTypography={true}
              className={itemText + ' ' + classes.userItemText}
            />
          </a>
          <Collapse in={state.openAvatar} unmountOnExit>
            <List className={classes.list + ' ' + classes.collapseList}>
              <ListItem className={classes.collapseItem}>
                <a
                  href='#'
                  className={
                    classes.itemLink + ' ' + classes.userCollapseLinks
                  }>
                  <span className={collapseItemMini}>
                    {rtlActive ? 'پ م' : 'MP'}
                  </span>
                  <ListItemText
                    primary={t('MyProfile')}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </a>
              </ListItem>
              <ListItem className={classes.collapseItem}>
                <a
                  href='#'
                  className={
                    classes.itemLink + ' ' + classes.userCollapseLinks
                  }>
                  <span className={collapseItemMini}>
                    {rtlActive ? ' و پ' : 'EP'}
                  </span>
                  <ListItemText
                  primary={t('EditProfile')}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </a>
              </ListItem>
              <ListItem className={classes.collapseItem}>
                <a
                  href='#'
                  className={
                    classes.itemLink + ' ' + classes.userCollapseLinks
                  }>
                  <span className={collapseItemMini}>
                    {rtlActive ? 'تپ' : 'S'}
                  </span>
                  <ListItemText
                  primary={t('SettingsProfile')}
                    disableTypography={true}
                    className={collapseItemText}
                  />
                </a>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </div>
  );

  const logoNormal =
    classes.logoNormal +
    ' ' +
    cx({
      [classes.logoNormalSidebarMini]: !props.miniActive && state.miniActive,
      [classes.logoNormalSidebarMiniRTL]:
        rtlActive && !props.miniActive && state.miniActive,
      [classes.logoNormalRTL]: rtlActive,
    });
  const logoMini =
    classes.logoMini +
    ' ' +
    cx({
      [classes.logoMiniRTL]: rtlActive,
    });
  const logoClasses =
    classes.logo +
    ' ' +
    cx({
      [classes.whiteAfter]: bgColor === 'white',
    });
  var brandLogo = (
    <div className={logoClasses}>
      <span style={{ cursor: 'pointer' }} className={logoMini}>
        <img src='/admin/images/logo.png' alt='logo' className={classes.img} />
      </span>
      <span style={{ cursor: 'pointer',lineHeight: `40px` }} className={logoNormal}>
        {brand[`name_${i18n.language}`]}
      </span>
    </div>
  );

  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return  location.pathname == props.router.basePath + routeName;
  };

  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      if (prop.redirect) {
        return null;
      }
      if (prop.collapse) {
        var st = {};
        st[prop['state']] = !state[prop.state];
        const navLinkClasses =
          classes.itemLink +
          ' ' +
          cx({
            [' ' + classes.collapseActive]: getCollapseInitialState(prop.views),
          });

        const itemText =
          classes.itemText +
          ' ' +
          cx({
            [classes.itemTextMini]: !props.miniActive && state.miniActive,
            [classes.itemTextMiniRTL]:
              rtlActive && !props.miniActive && state.miniActive,
            [classes.itemTextRTL]: rtlActive,
          });
        const collapseItemText =
          classes.collapseItemText +
          ' ' +
          cx({
            [classes.collapseItemTextMini]:
              !props.miniActive && state.miniActive,
            [classes.collapseItemTextMiniRTL]:
              rtlActive && !props.miniActive && state.miniActive,
            [classes.collapseItemTextRTL]: rtlActive,
          });
        const itemIcon =
          classes.itemIcon +
          ' ' +
          cx({
            [classes.itemIconRTL]: rtlActive,
          });
        const caret =
          classes.caret +
          ' ' +
          cx({
            [classes.caretRTL]: rtlActive,
          });
        const collapseItemMini =
          classes.collapseItemMini +
          ' ' +
          cx({
            [classes.collapseItemMiniRTL]: rtlActive,
          });
        return (
          <ListItem
            key={key}
            className={cx(
              { [classes.item]: prop.icon !== undefined },
              { [classes.collapseItem]: prop.icon === undefined }
            )}>
            <a
              href={'#'}
              className={navLinkClasses}
              onClick={(e) => {
                e.preventDefault();
                setState((oldState) => ({ ...oldState, ...st }));
              }}>
              {prop.icon !== undefined ? (
                typeof prop.icon === 'string' ? (
                  <Icon className={itemIcon}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={itemIcon} />
                )
              ) : (
                <span className={collapseItemMini}>
                  {/* {rtlActive ? !prop.rtlMini : prop.mini} */}
                  {prop[`mini_${i18n.language}`]}
                  {/* hashem */}
                </span>
              )}
              <ListItemText
                primary={prop[`name_${i18n.language}`]}
                secondary={
                  <b
                    className={
                      caret +
                      ' ' +
                      (state[prop.state] ? classes.caretActive : '')
                    }
                  />
                }
                disableTypography={true}
                className={cx(
                  { [itemText]: prop.icon !== undefined },
                  { [collapseItemText]: prop.icon === undefined }
                )}
              />
            </a>
            <Collapse in={state[prop.state]} unmountOnExit>
              <List className={classes.list + ' ' + classes.collapseList}>
                {createLinks(prop.views)}
              </List>
            </Collapse>
          </ListItem>
        );
      }

      const innerNavLinkClasses =
        classes.collapseItemLink +
        ' ' +
        cx({
          [' ' + classes[props.color]]: activeRoute(prop.path),
        });

      const collapseItemMini =
        classes.collapseItemMini +
        ' ' +
        cx({
          [classes.collapseItemMiniRTL]: rtlActive,
        });
      const navLinkClasses =
        classes.itemLink +
        ' ' +
        cx({
          [' ' + classes[props.color]]: activeRoute(prop.path),
        });
      const itemText =
        classes.itemText +
        ' ' +
        cx({
          [classes.itemTextMini]: !props.miniActive && state.miniActive,
          [classes.itemTextMiniRTL]:
            rtlActive && !props.miniActive && state.miniActive,
          [classes.itemTextRTL]: rtlActive,
        });
      const collapseItemText =
        classes.collapseItemText +
        ' ' +
        cx({
          [classes.collapseItemTextMini]: !props.miniActive && state.miniActive,
          [classes.collapseItemTextMiniRTL]:
            rtlActive && props.miniActive && state.miniActive,
          [classes.collapseItemTextRTL]: rtlActive,
        });
      const itemIcon =
        classes.itemIcon +
        ' ' +
        cx({
          [classes.itemIconRTL]: rtlActive,
        });

      return (
        <ListItem
          key={key}
          className={cx(
            { [classes.item]: prop.icon !== undefined },
            { [classes.collapseItem]: prop.icon === undefined }
          )}>
          <Link to={prop.layout + prop.path} onClick={()=>{props.router.asPath = prop.layout + prop.path}}>
            <span
              className={cx(
                { [navLinkClasses]: prop.icon !== undefined },
                { [innerNavLinkClasses]: prop.icon === undefined }
              )}>
              {prop.icon !== undefined ? (
                typeof prop.icon === 'string' ? (
                  <Icon className={itemIcon}>{prop.icon}</Icon>
                ) : (
                  <prop.icon className={itemIcon} />
                )
              ) : (
                <span className={collapseItemMini}>
                  {prop[`mini_${i18n.language}`]}
                </span>
              )}
              <ListItemText
                primary={prop[`name_${i18n.language}`]}
                disableTypography={true}
                className={cx(
                  { [itemText]: prop.icon !== undefined },
                  { [collapseItemText]: prop.icon === undefined }
                )}
              />
            </span>
          </Link>
        </ListItem>
      );
    });
  };

  var links = <List className={classes.list}>{createLinks(props.routes)}</List>;

  const mainPageMinimize =
    classes.mainPageMinimize +
    ' ' +
    cx({
      // [classes.mainPageMinimizeRTL]: rtlActive,
      [classes.mainPageHandlemainOpen]: props.miniActive,
      [classes.mainPageHandlemainClose]: !props.miniActive,
    });

  return (
    <div className={classes.wrapper}>
        {/* Sidebar */}
        <div ref={mainPanel}>
          <Hidden mdUp implementation='css'>
            <Drawer
              variant='temporary'
              anchor={rtlActive ? 'right' : 'right'}
              open={props.open}
              classes={{
                paper: classes.drawerPaper + ' ' + classes[bgColor + 'Background'],
              }}
              onClose={props.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}>
              {brandLogo}
              <SidebarWrapper
                className={classes.sidebarWrapper}
                user={user}
                headerLinks={<AdminNavbarLinks {...props} />}
                links={links}
              />
              <div
                className={classes.background}
                style={{ backgroundImage: 'url(/admin/images/sidebar-1.jpg)' }}
              />
            </Drawer>
          </Hidden>
          <Hidden smDown implementation='css'>
            <Drawer
              onMouseOver={() =>
                setState((oldState) => ({ ...oldState, miniActive: false }))
              }
              onMouseOut={() =>
                setState((oldState) => ({ ...oldState, miniActive: true }))
              }
              anchor={rtlActive ? 'right' : 'left'}
              variant='permanent'
              open
              classes={{
                paper: drawerPaper + ' ' + classes[bgColor + 'Background'],
              }}
              onClose={props.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}>
              {brandLogo}
              <SidebarWrapper
                className={sidebarWrapper}
                user={user}
                links={links}
              />
              <div
                className={classes.background}
                style={{ backgroundImage: 'url(/admin/images/sidebar-1.jpg)' }}
              />
            </Drawer>
          </Hidden>
          {/* appbar */}
          <div className={mainPanelClasses} ref={mainPanel}>
            <AppBar className={clsx(classes.appBar, appBarClasses)}>
              <Toolbar className={classes.container}>
                <Hidden smDown implementation='css'>
                  <div className={sidebarMinimize}>
                    {props.miniActive ? (
                      <IconButton onClick={props.sidebarMinimize}>
                        <ViewList className={classes.sidebarMiniIcon} />
                      </IconButton>
                    ) : (
                      <IconButton onClick={props.sidebarMinimize}>
                        <MoreVert className={classes.sidebarMiniIcon} />
                      </IconButton>
                    )}
                  </div>
                </Hidden>
                <div className={classes.flex}>
                  <Button href='' className={classes.title}>
                    {getActiveRoute(props.routes)}
                  </Button>
                </div>
                <Hidden smDown implementation='css'>
                  <AdminNavbarLinks {...props} />
                </Hidden>
                <Hidden mdUp implementation='css'>
                  <IconButton
                    onClick={props.handleDrawerToggle}
                    className={classes.appResponsive}>
                    <Menu />
                  </IconButton>
                </Hidden>
              </Toolbar>
            </AppBar>
          </div>
        </div>
        <span
          style={{
            display: 'flex',
            width: '100%',
            marginTop: 100,
          }}
          className={mainPageMinimize}>
          <CustomSwitch>
            <>
              <Route exact path='/admin/dashboard'>
                <MainDashboard {...props} />
                <ThemeUser {...props} />
              </Route>
              <Route exact path='/admin/dashboard/pricing-page'>
                The Price test page
                <ThemeUser {...props} />
              </Route>
              <Route exact path='/admin/dashboard/regular-forms'>
                Tforms
                <ThemeUser {...props} />
              </Route>
              <Route exact path='/admin/dashboard/buttons'>
              buttons multi
                <ThemeUser {...props} />
              </Route>
              <Route path='/notfoundpage'>
                <NotFound {...props} />
                <ThemeUser {...props} />
              </Route>
            </>
          </CustomSwitch>
        </span>
    </div>
  );
}

class SidebarWrapper extends React.Component {
  sidebarWrapper = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, user, headerLinks, links } = this.props;
    return (
      <div className={className} ref={this.sidebarWrapper}>
        {user}
        {headerLinks}
        {links}
      </div>
    );
  }
}
