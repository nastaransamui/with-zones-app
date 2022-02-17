import React from 'react';
import SampleDashboard from './SampleDashboard/SampleDashboard';
import ProDashboard from './ProDashboard/ProDashboard';
import { useSelector } from 'react-redux';
import routes from "../../../routes"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  Link,
} from 'react-router-dom';
export default function Dashboard(props) {
  const { sampleDashboardShow } = useSelector((state) => state);
  const [miniActive, setMiniActive] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const [color, setColor] = React.useState("white");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      {sampleDashboardShow ? (
        <SampleDashboard {...props} />
      ) : (

      <Router>
        <ProDashboard
          {...props}
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          routes={routes}
          color={color}
          handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        />
        </Router>
      )}
    </>
  );
}
