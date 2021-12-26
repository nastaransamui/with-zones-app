import { CssBaseline } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import useStyles from "./home-style";
import menu from "../../../public/text/menu";

const HomePage = (props) => {
  const { router } = props;
  const { t } = useTranslation("home");
  const { showMovie } = useSelector((state) => state);
  const classes = useStyles();
  // useEffect(() => {
  //   let isMount = true;
  //   if (isMount) {
  //     for (let index = 0; index < menu.length; index++) {
  //       const element = menu[index];
  //       document.getElementById(element.en).innerHTML = element[router.locale];
  //       console.log(document.getElementById(element.en));
  //       console.log(element[router.locale])
  //     }
  //   }
  //   return () => {
  //     isMount = false;
  //   };
  // }, []);
  
  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <main className={classes.containerWrap}>
          <section id="home">
            VideoBanner
            <div id="promotions">Promotions</div>
          </section>
          <section id="featured" className={classes.spaceTop}>
            Featured
          </section>
          <section id="trending" className={classes.spaceTop}>
            Trending
          </section>
          <section id="categories" className={classes.spaceTop}>
            Categories
          </section>
          <section id="all" className={classes.spaceTop}>
            AllCategories
          </section>
          <section id="pricing" className={classes.spaceTop}>
            PricingPlan
          </section>
          <section id="faq" className={classes.spaceTop}>
            Faq
          </section>
          <section id="news" className={classes.spaceTop}>
            NewsEvent
          </section>
        </main>
        <section id="footer" className={classes.spaceTop}></section>
      </div>
    </Fragment>
  );
};

export default HomePage;
