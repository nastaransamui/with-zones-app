import { makeStyles } from '@mui/styles';

const dashbardStyle = makeStyles((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    wrapper: {
      display: 'flex',
    },
    mainWrapper: {
      width: '100%',
      overflowY: 'hidden',
    },
  };
});

export default dashbardStyle;
