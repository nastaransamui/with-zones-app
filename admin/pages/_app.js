import { wrapper } from '../src/redux/store';
import { PropTypes } from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import common_en from '../public/locales/en/common.json';
import common_fa from '../public/locales/fa/common.json';
import dashboard_en from '../public/locales/en/dashboard.json';
import dashboard_fa from '../public/locales/fa/dashboard.json';
import i18next from 'i18next';
import { withTranslation, useTranslation } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider, jssPreset } from '@mui/styles';
import { create } from 'jss';
import CssBaseline from '@mui/material/CssBaseline';
import { PageTransition } from 'next-page-transitions';
import rtl from 'jss-rtl';
import LoadingBar from 'react-top-loading-bar';
import appTheme from '../theme/appTheme';
import '../styles/top-loading-bar.css';
import '../styles/page-transition.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'animate.css';
import '../styles/globals.css';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';
import Router from 'next/router';
import ReactDOM from 'react-dom';
import Loading from '../src/components/Loading/Loading';

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    interpolation: { scapeValue: false },
    lng:
      typeof window !== 'undefined'
        ? navigator.cookieEnabled
          ? localStorage.getItem('lang')
          : navigator?.language
        : 'en-US',
    fallbackLng: 'en-US',
    keySeparator: false,
    defaultNS: 'common',
    resources: {
      en: {
        common: common_en,
        dashboard: dashboard_en,
      },
      fa: {
        common: common_fa,
        dashboard: dashboard_fa,
      },
    },
  });

Router.events.on('routeChangeStart', (url) => {
  document.body.classList.add('body-page-transition');
  ReactDOM.render(<Loading />, document.getElementById('page-transition'));
});

Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

function MyApp(props) {
  const {
    Component,
    router,
    pageProps: { session, ...pageProps },
  } = props;
  const { t, i18n } = useTranslation('common');
  const { adminThemeName, adminThemeType, adminLoadingBar } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [adminTheme, setAdminTheme] = useState({
    ...appTheme(
      adminThemeName,
      adminThemeType,
      i18n.language.startsWith('fa') ? 'rtl' : 'ltr'
    ),
    direction: i18n.language.startsWith('fa') ? 'rtl' : 'ltr',
  });

  useEffect(() => {
    // Remove preloader or show javascript disabled warning
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      preloader.remove();
    }

    // Remove loading bar
    dispatch({
      type: 'ADMIN_LOADINGBAR',
      payload: 100,
    });

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if (!navigator.cookieEnabled) {
      let cookiesAlert = 'Please allow cookies';
      if (navigator?.language.substring(0, 2) == 'fa') {
        cookiesAlert = 'لطفا کوکی ها را مجاز کنید';
      }
      if (confirm(cookiesAlert)) {
        if (!navigator.cookieEnabled) {
          document.body.style.display = 'none';
        } else {
          location.reload();
        }
      } else {
        document.body.style.display = 'none';
      }
    } else {
      if (window.localStorage === undefined) {
        let localStorageAlert =
          'Your browser is outdated and not support localStorage!';
        if (navigator?.language.substring(0, 2) == 'cn') {
          localStorageAlert =
            'مرورگر شما قدیمی است و از localStorage پشتیبانی نمی کند!';
        }
        alert(localStorageAlert);
      } else {
        // localStorage.setItem('i18nextLng', navigator?.language);
      }
    }
  }, []);

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      document.dir = i18n.language === 'fa' ? 'rtl' : 'ltr';
      dispatch({
        type: 'ADMIN_THEMENAME',
        payload: localStorage.getItem('adminThemeName') || adminThemeName,
      });
      dispatch({
        type: 'ADMIN_THEMETYPE',
        payload: localStorage.getItem('adminThemeType') || adminThemeType,
      });
      setAdminTheme({
        ...appTheme(
          (typeof window !== 'undefined' &&
            localStorage.getItem('adminThemeName')) ||
            adminThemeName,
          (typeof window !== 'undefined' &&
            localStorage.getItem('adminThemeType')) ||
            adminThemeType,
          i18n.language === 'fa' ? 'rtl' : 'ltr'
        ),
        direction: i18n.language.startsWith('fa') ? 'rtl' : 'ltr',
      });
    }
    return () => {
      isMount = false;
    };
  }, [adminThemeType, adminThemeName, i18n.language]);

  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <Fragment>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <I18nextProvider i18n={i18next}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={adminTheme}>
            <CssBaseline />
            <LoadingBar
              height={5}
              color={adminTheme.palette.primary.light}
              progress={adminLoadingBar}
              className='top-loading-bar'
            />
            <div suppressHydrationWarning>
              {typeof window === 'undefined' ? null : (
                <PageTransition timeout={300} classNames='page-fade-transition'>
                  <Component
                    router={router}
                    {...pageProps}
                    key={router.route}
                    t={t}
                    i18n={i18n}
                  />
                </PageTransition>
              )}
            </div>
          </ThemeProvider>
        </StylesProvider>
      </I18nextProvider>
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(withTranslation('common')(MyApp));
