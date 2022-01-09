import { CssBaseline } from '@mui/material';

import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './home-style';
import menu from '../../../public/text/menu';
import AnimateSlider from '../../components/AnimateSlider/AnimateSlider';
import VideoBanner from '../../components/VideoBanner/VideoBanner';
import PageNav from '../../components/PageNav/PageNav';

const HomePage = (props) => {
  const { router, t } = props;

  const { showMovie } = useSelector((state) => state);
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <main className={classes.containerWrap}>
          <section id='home'>
            {showMovie ? (
              <VideoBanner {...props} />
            ) : (
              <AnimateSlider {...props} />
            )}
          </section>
          {
            menu.map((Item, index) =>{
              return(
                <section id={Item.en} key={index.toString()} className={classes.spaceTop}>
                  <Item.firstComponent {...props} />
                </section>
              )
            })
          }
        </main>
        <section id='footer' style={{marginTop : 300}} className={classes.spaceTop}></section>
        <PageNav {...props} />
      </div>
    </Fragment>
  );
};

export default HomePage;
