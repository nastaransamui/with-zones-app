import { makeStyles } from '@mui/styles';

const topbarStyle = makeStyles((theme) => {
  return {
    appBar: {
      width: '100%',
      color: `${theme.palette.type == 'dark' ? 'white' : 'black'} !important`,
      backgroundColor: `${theme.palette.primary.light} !important`,
      position: 'sticky',
      top: 0,
      zIndex: 999,
    },
    topbarWrapper: {
      height: '100%',
      padding: '0px 20px',
      display: 'flex',
      alignItems: 'center',
    },
    topLeft: {
      cursor: 'pointer',
      textTransform: 'uppercase',
      marginLeft: '20px !important',
    },
    topRight: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
    },
    topbarIconContainer: {
      position: 'relative',
      cursor: 'pointer',
      marginRight: 10,
      color: '#f3c40f',
    },
    topAvatar: {
      borderRadius: '50%',
      cursor: 'pointer',
    },
    options: {
      display: 'none',
      backgroundColor: '#3f51b5',
      borderRadius: 5,
      width: 100,
      '& span': {
        padding: 10,
        cursor: 'pointer',
      },
    },
    scrolled: {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      color: `${theme.palette.secondary.dark} !important`,
    },
    languageIcon: {
      color: '#f3c40f !important',
    },
    menuItemText: {
      display: 'flex',
      alignItems: 'center',
    },
    menuItemMobile: {
      marginTop: 49,
    },
    flag: {
      width: 20,
      height: 20,
    },
    setting: {
      '& $icon': {
        transition: 'all 0.3s ease',
        color:
          theme.palette.mode === 'light'
            ? theme.palette.common.black
            : theme.palette.common.white,
      },
      '& $active': {
        transform: 'rotate(30deg)',
      },
    },
    icon: {},
    active: {},
    modeMenu: {
      textTransform: 'capitalize',
    },
    langMenu: {
      textTransform: 'capitalize',
    },
    headerLinksSvg: {
      width: '20px !important',
      height: '20px !important',
    },
  };
});

export default topbarStyle;
