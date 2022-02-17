import { makeStyles } from '@mui/styles';
const drawerWidth = 240;
const sidebarStyle = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      marginTop: 60,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      marginTop: 60,
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    sidebar: {
      height: 'calc(100vh - 64px)',
      position: 'sticky',
      top: 50,
      display: 'flex',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
  };
});

export default sidebarStyle;
