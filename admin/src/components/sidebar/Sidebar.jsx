
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";
import SidebarLists from "./SidebarLists";
import sidebarStyle from "./sidebar-style";

const Sidebar = ({drawerOpen, i18n}) => {
  const classes = sidebarStyle();

  return (
    <div className={classes.sidebar}>
      <Drawer
        variant="permanent"
        anchor={i18n.language == 'fa' ? 'right' : 'left'}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
      >
        <SidebarLists />
      </Drawer>
    </div>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired
}

export default Sidebar;
