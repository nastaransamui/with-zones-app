import { makeStyles } from "@mui/styles";
const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles((theme) => {
  return {
    mainWrap: {
    },
    spaceTop:{
      marginTop: sectionMargin(16),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: sectionMargin(2),
    }
    }
  };
});

export default useStyles;
