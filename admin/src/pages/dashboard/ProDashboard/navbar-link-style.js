import { makeStyles } from '@mui/styles';
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em',
};
const blackColor = '#000';
const successColor = [
  '#4caf50',
  '#66bb6a',
  '#43a047',
  '#5cb860',
  '#388e3c',
  '#d0e9c6',
  '#dff0d8',
];

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
const whiteColor = '#FFF';
const dangerColor = [
  '#f44336',
  '#ef5350',
  '#e53935',
  '#f55a4e',
  '#d32f2f',
  '#ebcccc',
  '#f2dede',
];
const warningColor = [
  '#ff9800',
  '#ffa726',
  '#fb8c00',
  '#ffa21a',
  '#f57c00',
  '#faf2cc',
  '#fcf8e3',
];
const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573', '#c2185b'];
const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5', '#7b1fa2'];
const primaryBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(primaryColor[0]) +
    ',.4)',
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
const infoColor = [
  '#00acc1',
  '#26c6da',
  '#00acc1',
  '#00d3ee',
  '#0097a7',
  '#c4e3f3',
  '#d9edf7',
];
const infoBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(infoColor[0]) +
    ',.4)',
};
const successBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(successColor[0]) +
    ',.4)',
};
const warningBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(warningColor[0]) +
    ',.4)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(dangerColor[0]) +
    ',.4)',
};
const roseBoxShadow = {
  boxShadow:
    '0 4px 20px 0 rgba(' +
    hexToRgb(blackColor) +
    ',.14), 0 7px 10px -5px rgba(' +
    hexToRgb(roseColor[0]) +
    ',.4)',
};
const NavbarLinkStyles = makeStyles((theme) => {
  return {
    // CustomDropdown
    popperClose: {
      pointerEvents: 'none',
      display: 'none !important',
    },
    popperNav: {
      [theme.breakpoints.down('sm')]: {
        position: 'static !important',
        left: 'unset !important',
        top: 'unset !important',
        transform: 'none !important',
        willChange: 'unset !important',
        '& > div': {
          boxShadow: 'none !important',
          marginLeft: '0rem',
          marginRight: '0rem',
          transition: 'none !important',
          marginTop: '0px !important',
          marginBottom: '0px !important',
          padding: '0px !important',
          backgroundColor: 'transparent !important',
          '& ul li': {
            color: whiteColor + ' !important',
            margin: '10px 15px 0!important',
            padding: '10px 15px !important',
            '&:hover': {
              backgroundColor: 'hsla(0,0%,78%,.2)',
              boxShadow: 'none',
            },
          },
        },
      },
    },
    manager: {
      '& > div > button:first-child > span:first-child, & > div > a:first-child > span:first-child':
        {
          width: '100%',
        },
    },
    innerManager: {
      '& > div > button,& > div > a': {
        margin: '0px !important',
        color: 'inherit !important',
        padding: '10px 20px !important',
        '& > span:first-child': {
          width: '100%',
          justifyContent: 'flex-start',
        },
      },
    },
    target: {
      '& > button:first-child > span:first-child, & > a:first-child > span:first-child':
        {
          display: 'inline-block',
        },
      '& $caret': {
        marginLeft: '0px',
      },
    },
    dropdown: {
      borderRadius: '3px',
      border: '0',
      boxShadow: '0 2px 5px 0 rgba(' + hexToRgb(blackColor) + ', 0.26)',
      top: '100%',
      zIndex: '1000',
      minWidth: '160px',
      padding: '5px 0',
      margin: '20px -100px 0 10px',
      fontSize: '14px',
      textAlign: 'left',
      listStyle: 'none',
      backgroundColor: theme.palette.paper,
      backgroundClip: 'padding-box',
    },
    menuList: {
      padding: '0',
    },
    popperResponsive: {
      zIndex: '1200',
      [theme.breakpoints.down('sm')]: {
        zIndex: '1640',
        position: 'static',
        float: 'none',
        width: 'auto',
        marginTop: '0',
        backgroundColor: 'transparent',
        border: '0',
        boxShadow: 'none',
        color: 'black',
      },
    },
    dropdownItem: {
      ...defaultFont,
      fontSize: '13px',
      padding: '10px 20px',
      margin: '0 5px',
      borderRadius: '2px',
      position: 'relative',
      transition: 'all 150ms linear',
      display: 'block',
      clear: 'both',
      fontWeight: '400',
      height: '100%',
      color: theme.palette.text.color,
      whiteSpace: 'nowrap',
      minHeight: 'unset',
    },
    darkHover: {
      '&:hover': {
        boxShadow:
          '0 4px 20px 0px rgba(' +
          hexToRgb(blackColor) +
          ', 0.14), 0 7px 10px -5px rgba(' +
          hexToRgb(grayColor[16]) +
          ', 0.4)',
        backgroundColor: grayColor[16],
        color: whiteColor,
      },
    },

    infoHover: {
      '&:hover': {
        backgroundColor: infoColor[0],
        color: whiteColor,
        ...infoBoxShadow,
      },
    },
    successHover: {
      '&:hover': {
        backgroundColor: successColor[0],
        color: whiteColor,
        ...successBoxShadow,
      },
    },
    warningHover: {
      '&:hover': {
        backgroundColor: warningColor[0],
        color: whiteColor,
        ...warningBoxShadow,
      },
    },
    dangerHover: {
      '&:hover': {
        backgroundColor: dangerColor[0],
        color: whiteColor,
        ...dangerBoxShadow,
      },
    },
    roseHover: {
      '&:hover': {
        backgroundColor: roseColor[0],
        color: whiteColor,
        ...roseBoxShadow,
      },
    },
    dropdownItemRTL: {
      textAlign: 'right',
    },
    dropdownDividerItem: {
      margin: '5px 0',
      backgroundColor: 'rgba(' + hexToRgb(blackColor) + ', 0.12)',
      height: '1px',
      overflow: 'hidden',
    },
    buttonIcon: {
      width: '20px',
      height: '20px',
    },
    caret: {
      transition: 'all 150ms ease-in',
      display: 'inline-block',
      width: '0',
      height: '0',
      marginLeft: '4px',
      verticalAlign: 'middle',
      borderTop: '4px solid',
      borderRight: '4px solid transparent',
      borderLeft: '4px solid transparent',
    },
    caretActive: {
      transform: 'rotate(180deg)',
    },
    caretDropup: {
      transform: 'rotate(180deg)',
    },
    caretRTL: {
      marginRight: '4px',
    },
    dropdownHeader: {
      display: 'block',
      padding: '0.1875rem 1.25rem',
      fontSize: '0.75rem',
      lineHeight: '1.428571',
      color: grayColor[1],
      whiteSpace: 'nowrap',
      fontWeight: 'inherit',
      marginTop: '10px',
      minHeight: 'unset',
      '&:hover,&:focus': {
        backgroundColor: 'transparent',
        cursor: 'auto',
      },
    },
    noLiPadding: {
      padding: '0',
    },
    wrapper: {
      [theme.breakpoints.between('sm', 'md')]: {
        display: 'flex',
      },
      // background: 'blue',
      // height: '100%',
      // padding: '0px 20px',
      // display: 'flex',
      // alignItems: 'center',
    },
    primaryHover: {
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        // color: whiteColor,
        ...primaryBoxShadow,
      },
    },
    wrapperRTL: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: '16px',
      },
    },
    managerClasses: {
      [theme.breakpoints.up('md')]: {
        display: 'inline-block',
      },
    },
    buttonLinkRTL: {
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '-webkit-fill-available',
        margin: '10px 15px 0',
        padding: '10px 15px',
        display: 'block',
        position: 'relative',
      },
    },
    buttonLink: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        margin: '5px 15px 0',
        width: 'auto',
        height: 'auto',
        '& svg': {
          width: '30px',
          height: '24px',
          marginRight: '19px',
          marginLeft: '3px',
        },
        '& .fab,& .fas,& .far,& .fal,& .material-icons': {
          width: '30px',
          fontSize: '24px',
          lineHeight: '30px',
          marginRight: '19px',
          marginLeft: '3px',
        },
      },
    },
    labelRTL: {
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row-reverse',
        justifyContent: 'initial',
        display: 'flex',
      },
    },
    headerLinksSvg: {
      width: '20px !important',
      height: '20px !important',
    },
    links: {
      width: '20px',
      height: '20px',
      zIndex: '4',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        width: '30px',
        height: '30px',
        color: 'inherit',
        opacity: '0.8',
        marginRight: '16px',
        marginLeft: '-5px',
        fill: whiteColor,
      },
    },
    linksRTL: {
      // [theme.breakpoints.down('sm')]: {
      //   marginRight: '-5px !important',
      //   marginLeft: '16px !important',
      // },
    },
    linkText: {
      zIndex: '4',
      ...defaultFont,
      fontSize: '14px',
      margin: '0!important',
      textTransform: 'none',
      color: whiteColor,
    },
    languagePack: {
      display: 'flex',
      color: theme.palette.text.color,
      [theme.breakpoints.down('sm')]: {
        color: whiteColor,
      },
      flexDirection: theme.direction == 'rtl' ? 'row-reverse' : 'row',
    },
    notifications: {
      zIndex: '4',
      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
        top: '5px',
        border: '1px solid ' + whiteColor,
        right: '5px',
        fontSize: '9px',
        background: dangerColor[0],
        color: whiteColor,
        minWidth: '16px',
        height: '16px',
        borderRadius: '10px',
        textAlign: 'center',
        lineHeight: '14px',
        verticalAlign: 'middle',
        display: 'block',
      },
      [theme.breakpoints.down('sm')]: {
        ...defaultFont,
        fontSize: '14px',
        marginRight: '8px',
      },
    },
  };
});

export default NavbarLinkStyles;
