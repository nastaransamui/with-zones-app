import { Fragment } from "react";
import { checkCookies, getCookies } from "cookies-next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { wrapper } from "../src/redux/store";
import { getSession } from "next-auth/react";
import HeadComponent from "../src/components/head";
import Mainlayout from "../src/pages/MainLayout";
import brand from "../public/text/brand";
import Homepage from "../src/pages/home/HomePage";
function Home(props) {
  const { router } = props;
  const { locale } = router;
  return (
    <Fragment>
      <HeadComponent title={brand[`name_${locale}`]} />
      <Mainlayout {...props}>
        <Homepage {...props} />
      </Mainlayout>
    </Fragment>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    return {
      props: {
        session: await getSession(ctx),
        ...(await serverSideTranslations(ctx.locale, [
          "common",
          "home",
          "404",
        ])),
        ...(checkCookies("themeName", ctx) &&
          (await store.dispatch({
            type: "THEMENAME",
            payload: getCookies(ctx).themeName,
          }))),
        ...(checkCookies("themeType", ctx) &&
          (await store.dispatch({
            type: "THEMETYPE",
            payload: getCookies(ctx).themeType,
          }))),
      },
    };
  }
);
export default Home;
