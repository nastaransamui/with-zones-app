
import MainDashboard from '../../../components/mainDashboard/MainDashboard';
import Sidebar from '../../../components/sidebar/Sidebar';
import Topbar from '../../../components/topbar/Topbar';
import dashbardStyle from './dashboard-style';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation
} from 'react-router-dom';
import SimpleBreadcrumbs from '../../../components/breadcrumb/Breadcrumb';
import NotFound from '../NotFound';
import ErrorPage from '../../ErrorPage'
import { removeCookies } from 'cookies-next';
import PropTypes from 'prop-types';
import Loading from '../../../components/Loading/Loading';
import {useSelector} from 'react-redux'
import ThemeUser from '../../../components/ThemeUser/ThemeUser'
export function NotFoundPage() {
  return null;
}
export function CustomSwitch(props) {
  const { children } = props;
  const history = useHistory();
  const router = useRouter();
  let reactPath = [];
  // get all registerd path from react router without id's
  if (Object.keys(children.props).length !== 0) {
    for (let index = 0; index < children.props.children.length; index++) {
      const element = children.props.children[index];
      let paths = element.props.path;
      if (paths.indexOf('=') !== -1) {
        paths = paths.substring(0, paths.indexOf('='));
      }
      reactPath.push(paths);
    }
  }
  // get current route with out id from next router
  let currentPath =`${router.basePath}${router.route}`
  const location = useLocation();
   //If current route is not valid push to notfoundpage
  let showErrorPage = !reactPath.includes(location.pathname);


  useEffect(() => {
    if (showErrorPage) history.push('/notfoundpage');
  }, [router,location]);
  return (
    <Switch>
      {children}
      <NotFoundPage />
    </Switch>
  );
}

export default function SampleDashboard(props) {
  const { router, i18n, t } = props;
  const classes = dashbardStyle()
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { adminLoadingBar } = useSelector((state) => state);
  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };


  return (
    <div className={classes.container}>
        <Router>
          <Topbar handleDrawer={handleDrawer} {...props} drawerOpen={drawerOpen}/>
          <div className={classes.wrapper}>
            <Sidebar drawerOpen={drawerOpen} {...props} i18n={i18n} />
            <div className={classes.mainWrapper}>
              <SimpleBreadcrumbs {...props} />
              <CustomSwitch>
                  <>
                    <Route exact path='/admin/dashboard'>
                      <MainDashboard {...props}/>
                      <ThemeUser {...props} />
                    </Route>
                    <Route path="/notfoundpage">
                      <NotFound {...props}/>
                    </Route>
                  </>
              </CustomSwitch>
            </div>
          </div>
        </Router>
      </div>
  )
}


CustomSwitch.propTypes = {
  children: PropTypes.object.isRequired
}