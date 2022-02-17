import { makeStyles } from '@mui/styles';
const hexToRgb = (input) => {
  input = input + '';
  input = input.replace('#', '');
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ', ' +
    parseInt(second, 16) +
    ', ' +
    parseInt(last, 16)
  );
};
const drawerWidth = 260;
const blackColor = '#000';
const whiteColor = '#FFF';
const drawerMiniWidth = 80;
const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(' +
    hexToRgb(blackColor) +
    ', 0.42), 0 4px 25px 0px rgba(' +
    hexToRgb(blackColor) +
    ', 0.12), 0 8px 10px -5px rgba(' +
    hexToRgb(blackColor) +
    ', 0.2)',
};
const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};
const grayColor = [
  '#999',
  '#777',
  '#3C4858',
  '#AAAAAA',
  '#D2D2D2',
  '#DDD',
  '#555555',
  '#333',
  '#eee',
  '#ccc',
  '#e4e4e4',
  '#E5E5E5',
  '#f9f9f9',
  '#f5f5f5',
  '#495057',
  '#e7e7e7',
  '#212121',
  '#c8c8c8',
  '#505050',
  '#212121',
  '#263238',
];
const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5', '#7b1fa2'];
const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(' +
    hexToRgb(blackColor) +
    ', 0.42), 0 3px 20px 0px rgba(' +
    hexToRgb(blackColor) +
    ', 0.12), 0 8px 10px -5px rgba(' +
    hexToRgb(blackColor) +
    ', 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};
const containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '&:before,&:after': {
    display: 'table',
    content: '" "',
  },
  '&:after': {
    clear: 'both',
  },
};

const proStyle = makeStyles((theme) => {
  return {
    // wrapper: {color: theme.palette.text.color,
    //   position: 'relative',
    //   top: '0',
    //   height: '100vh',
    //   '&:after': {
    //     display: 'table',
    //     clear: 'both',
    //     content: '" "',
    //   },
    //   '& header,& header + div': {
    //     direction: 'rtl',
    //   },
    // },
    // mainPanel: {
    //   transitionProperty: 'top, bottom, width',
    //   transitionDuration: '.2s, .2s, .35s',
    //   transitionTimingFunction: 'linear, linear, ease',
    //   [theme.breakpoints.up('md')]: {
    //     width: `calc(100% - ${drawerWidth}px)`,
    //   },
    //   overflow: 'auto',
    //   position: 'relative',
    //   float: 'left',
    //   ...transition,
    //   maxHeight: '100%',
    //   width: '100%',
    //   overflowScrolling: 'touch',
    // },
    // mainPanelSidebarMini: {
    //   [theme.breakpoints.up('md')]: {
    //     width: `calc(100% - ${drawerMiniWidth}px)`,
    //   },
    // },
    // mainPanelWithPerfectScrollbar: {
    //   overflow: 'hidden !important',
    // },
    appBar: {
      backgroundColor: 'transparent',
      // boxShadow: 'none',
      // borderBottom: '0',
      // marginBottom: '0',
      // position: 'absolute',
      width: '100%',
      paddingTop: '10px',
      zIndex: '1029',
      color: grayColor[6],
      border: '0',
      borderRadius: '3px',
      padding: '10px 0',
      transition: 'all 150ms ease 0s',
      minHeight: '50px',
      display: 'block',
    },
    sidebarWrapper: {
      position: 'relative',
      height: 'calc(100vh - 75px)',
      overflow: 'auto',
      width: '260px',
      zIndex: '4',
      overflowScrolling: 'touch',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      color: 'inherit',
      paddingBottom: '30px',
    },
    sidebarWrapperWithPerfectScrollbar: {
      overflow: 'hidden !important',
    },
    sidebarHandlemainOpen: {
      padding: `0 0 0 ${drawerWidth}px !important`,
      transition: 'all .35s ease',
    },
    sidebarHandlemainClose: {
      transition: 'all .35s ease',
      padding: `0 0 0 ${drawerMiniWidth}px !important`,
    },
    mainPageHandlemainOpen: {
      [theme.breakpoints.up('sm')]: {
        transition: 'all .35s ease',
        padding: `0 0 0 ${theme.spacing(37)} !important`,
      },
    },
    mainPageHandlemainClose: {
      [theme.breakpoints.up('sm')]: {
        transition: 'all .35s ease',
        padding: `0 0 0 ${theme.spacing(15)} !important`,
      },
    },
    drawerPaper: {
      border: 'none',
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      zIndex: '1032',
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      // overflow: 'auto',
      ...boxShadow,
      width: drawerWidth,
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        position: 'fixed',
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        width: drawerWidth,
        ...boxShadow,
        position: 'fixed',
        display: 'block',
        top: '0',
        height: '100vh',
        right: '0',
        left: 'auto',
        zIndex: '1032',
        visibility: 'visible',
        overflowY: 'visible',
        borderTop: 'none',
        textAlign: 'left',
        paddingRight: '0px',
        paddingLeft: '0',
        transform: `translate3d(${drawerWidth}px, 0, 0)`,
        ...transition,
      },
      '&:before,&:after': {
        position: 'absolute',
        zIndex: '3',
        width: '100%',
        height: '100%',
        content: '""',
        display: 'block',
        top: '0',
      },
    },
    drawerPaperMini: {
      width: drawerMiniWidth + 'px!important',
    },
    drawerPaperOpenMobile: {
      width: drawerWidth + 'px!important',
    },
    blackBackground: {
      color: whiteColor,
      '&:after': {
        background: blackColor,
        opacity: '.8',
      },
    },
    mainPanel: {
      transitionProperty: 'top, bottom, width',
      transitionDuration: '.2s, .2s, .35s',
      transitionTimingFunction: 'linear, linear, ease',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      overflow: 'auto',
      position: 'relative',
      float: 'left',
      ...transition,
      maxHeight: '100%',
      width: '100%',
      overflowScrolling: 'touch',
    },
    mainPanelSidebarMini: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerMiniWidth}px)`,
      },
    },
    sidebarMinimize: {
      float: 'left',
      padding: '0 0 0 15px',
      display: 'block',
      color: grayColor[6],
    },
    mainPageMinimize: {
      float: 'left',
      padding: '0 0 0 15px',
      display: 'block',
      color: theme.palette.text.color,
    },
    sidebarMinimizeRTL: {
      padding: '0 15px 0 0 !important',
    },
    flex: {
      flex: 1,
    },
    title: {
      ...defaultFont,
      lineHeight: '30px',
      fontSize: '18px',
      borderRadius: '3px',
      textTransform: 'none',
      color: `${theme.palette.type == 'dark' ? 'white' : 'black'} !important`,
      paddingTop: '0.625rem',
      paddingBottom: '0.625rem',
      margin: '0 !important',
      letterSpacing: 'unset',
      '&:hover,&:focus': {
        background: 'transparent',
      },
    },
    sidebarMiniIcon: {
      width: '20px',
      height: '17px',
    },
    background: {
      position: 'absolute',
      zIndex: '1',
      height: '100%',
      width: '100%',
      display: 'block',
      top: '0',
      left: '0',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      transition: 'all 300ms linear',
    },
    user: {
      paddingBottom: '20px',
      margin: '20px auto 0',
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        right: '15px',
        height: '1px',
        width: 'calc(100% - 30px)',
        backgroundColor: 'hsla(0,0%,100%,.3)',
      },
    },
    photo: {
      transition: 'all 300ms linear',
      width: '34px',
      height: '34px',
      overflow: 'hidden',
      float: 'left',
      zIndex: '5',
      marginRight: '11px',
      borderRadius: '50%',
      marginLeft: '23px',
      ...boxShadow,
    },
    photoRTL: {
      float: 'right',
      marginLeft: '12px',
      marginRight: '24px',
    },
    avatarImg: {
      width: '100%',
      verticalAlign: 'middle',
      border: '0',
    },
    list: {
      marginTop: '15px',
      paddingLeft: '0',
      paddingTop: '0',
      paddingBottom: '0',
      marginBottom: '0',
      listStyle: 'none',
      color: 'inherit',
      '&:before,&:after': {
        display: 'table',
        content: '" "',
      },
      '&:after': {
        clear: 'both',
      },
    },
    item: {
      color: whiteColor,
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      margin: '0',
      padding: '0',
    },
    userItem: {
      '&:last-child': {
        paddingBottom: '0px',
      },
    },
    collapseItemLink: {
      transition: 'all 300ms linear',
      margin: '0 15px',
      borderRadius: '3px',
      position: 'relative',
      display: 'block',
      padding: '10px',
      backgroundColor: 'transparent',
      ...defaultFont,
      width: 'auto',
      '&:hover': {
        outline: 'none',
        backgroundColor: 'rgba(' + hexToRgb(grayColor[17]) + ', 0.2)',
        boxShadow: 'none',
      },
      '&,&:hover,&:focus': {
        color: whiteColor,
      },
    },
    itemLink: {
      paddingLeft: '10px',
      paddingRight: '10px',
      transition: 'all 300ms linear',
      margin: '10px 15px 0',
      borderRadius: '3px',
      position: 'relative',
      display: 'block',
      padding: '10px 15px',
      backgroundColor: 'transparent',
      ...defaultFont,
      width: 'auto',
      '&:hover': {
        outline: 'none',
        backgroundColor: 'rgba(' + hexToRgb(grayColor[17]) + ', 0.2)',
        boxShadow: 'none',
      },
      '&,&:hover,&:focus': {
        color: 'inherit',
      },
    },
    userCollapseButton: {
      margin: '0',
      padding: '6px 15px',
      '&:hover': {
        background: 'none',
      },
    },
    caret: {
      marginTop: '13px',
      position: 'absolute',
      right: '18px',
      transition: 'all 150ms ease-in',
      display: 'inline-block',
      width: '0',
      height: '0',
      marginLeft: '2px',
      verticalAlign: 'middle',
      borderTop: '4px solid',
      borderRight: '4px solid transparent',
      borderLeft: '4px solid transparent',
    },
    caretRTL: {
      left: '11px',
      right: 'auto',
    },
    userCaret: {
      marginTop: '10px',
    },
    caretActive: {
      transform: 'rotate(180deg)',
    },
    itemText: {
      color: 'inherit',
      ...defaultFont,
      margin: '0',
      lineHeight: '30px',
      fontSize: '14px',
      transform: 'translate3d(0px, 0, 0)',
      opacity: '1',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      position: 'relative',
      display: 'block',
      height: 'auto',
      whiteSpace: 'nowrap',
      padding: '0 16px !important',
    },
    itemTextMini: {
      [theme.breakpoints.up('md')]: {
        transform: 'translate3d(-25px, 0, 0)',
      },
      opacity: '0',
      [theme.breakpoints.down('sm')]: {
        opacity: 1,
      },
    },
    itemTextRTL: {
      marginRight: '45px',
      textAlign: 'right',
    },
    itemTextRTL: {
      marginRight: '45px',
      textAlign: 'right',
    },
    userItemText: {
      lineHeight: '22px',
    },
    list: {
      marginTop: '15px',
      paddingLeft: '0',
      paddingTop: '0',
      paddingBottom: '0',
      marginBottom: '0',
      listStyle: 'none',
      color: whiteColor,
      '&:before,&:after': {
        display: 'table',
        content: '" "',
      },
      '&:after': {
        clear: 'both',
      },
    },
    collapseList: {
      marginTop: '0',
      '& $caret': {
        marginTop: '8px',
      },
    },
    collapseItem: {
      position: 'relative',
      display: 'block',
      textDecoration: 'none',
      margin: '10px 0 0 0',
      padding: '0',
    },
    itemLink: {
      paddingLeft: '10px',
      paddingRight: '10px',
      transition: 'all 300ms linear',
      margin: '10px 15px 0',
      borderRadius: '3px',
      position: 'relative',
      display: 'block',
      padding: '10px 15px',
      backgroundColor: 'transparent',
      ...defaultFont,
      width: 'auto',
      '&:hover': {
        outline: 'none',
        backgroundColor: 'rgba(' + hexToRgb(grayColor[17]) + ', 0.2)',
        boxShadow: 'none',
      },
      '&,&:hover,&:focus': {
        color: 'inherit',
      },
    },
    userCollapseLinks: {
      marginTop: '-4px',
    },
    collapseItemMini: {
      color: 'inherit',
      ...defaultFont,
      textTransform: 'uppercase',
      width: '30px',
      marginRight: '15px',
      textAlign: 'center',
      letterSpacing: '1px',
      position: 'relative',
      float: 'left',
      display: 'inherit',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      fontSize: '14px',
    },
    collapseItemMiniRTL: {
      float: 'right',
      marginLeft: '30px',
      marginRight: '1px',
    },
    collapseItemText: {
      color: whiteColor,
      ...defaultFont,
      margin: '0',
      position: 'relative',
      transform: 'translateX(0px)',
      opacity: '1',
      whiteSpace: 'nowrap',
      display: 'block',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      fontSize: '14px',
    },
    collapseItemTextRTL: {
      textAlign: 'right',
    },
    collapseItemTextMiniRTL: {
      transform: 'translate3d(25px, 0, 0) !important',
    },
    collapseItemTextMini: {
      [theme.breakpoints.up('md')]: {
        transform: 'translate3d(-25px, 0, 0)',
      },
      opacity: '0',
      [theme.breakpoints.down('sm')]: {
        opacity: 1,
      },
    },

    logo: {
      padding: '15px 0px',
      margin: '0',
      display: 'block',
      position: 'relative',
      zIndex: '4',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: '0',
        height: '1px',
        right: '15px',
        width: 'calc(100% - 30px)',
        backgroundColor: 'hsla(0,0%,100%,.3)',
      },
    },
    logoMini: {
      transition: 'all 300ms linear',
      opacity: 1,
      float: 'left',
      textAlign: 'center',
      width: '30px',
      display: 'inline-block',
      maxHeight: '30px',
      marginLeft: '22px',
      marginRight: '18px',
      marginTop: '7px',
      color: 'inherit',
    },
    logoMiniRTL: {
      float: 'right',
      marginRight: '30px',
      marginLeft: '26px',
    },
    logoNormal: {
      ...defaultFont,
      transition: 'all 300ms linear',
      display: 'block',
      opacity: '1',
      transform: 'translate3d(0px, 0, 0)',
      textTransform: 'uppercase',
      padding: '5px 0px',
      fontSize: '18px',
      whiteSpace: 'nowrap',
      fontWeight: '400',
      lineHeight: '30px',
      overflow: 'hidden',
      '&,&:hover,&:focus': {
        color: 'inherit',
      },
    },
    logoNormalRTL: {
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
      },
    },
    logoNormalSidebarMini: {
      opacity: '0',
      [theme.breakpoints.up('md')]: {
        transform: 'translate3d(-25px, 0, 0)',
      },
      [theme.breakpoints.down('sm')]: {
        opacity: 1,
      },
    },
    logoNormalSidebarMiniRTL: {
      transform: 'translate3d(25px, 0, 0)',
    },
    img: {
      width: '35px',
      verticalAlign: 'middle',
      border: '0',
    },
    white: {
      '&,&:hover,&:focus': {
        color: grayColor[2],
        backgroundColor: theme.palette.primary.main,
        boxShadow:
          '0 4px 20px 0 rgba(' +
          hexToRgb(blackColor) +
          ',.14), 0 7px 10px -5px rgba(' +
          hexToRgb(grayColor[2]) +
          ',.4)',
      },
    },
    whiteBackground: {
      color: grayColor[2],
      '&:after': {
        background: whiteColor,
        opacity: '.93',
      },
    },
    whiteAfter: {
      '&:after': {
        backgroundColor: 'hsla(0,0%,71%,.3) !important',
      },
    },

    collapseActive: {
      outline: 'none',
      backgroundColor: 'rgba(' + hexToRgb(grayColor[17]) + ', 0.2)',
      boxShadow: 'none',
    },

    itemIcon: {
      color: 'inherit',
      width: '30px',
      height: '24px',
      float: 'left',
      position: 'inherit',
      top: '3px',
      marginRight: '15px',
      textAlign: 'center',
      verticalAlign: 'middle',
      opacity: '0.8',
    },
    itemIconRTL: {
      float: 'right',
      marginLeft: '15px',
      marginRight: '1px',
    },
  };
});

export default proStyle;
