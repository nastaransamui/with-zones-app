import Head from 'next/head';
import brand from "../../public/text/brand";
import PropTypes from "prop-types";
const HeadComponent = ({title}) => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
       <meta name="description" content={brand.desc_en} />
      {/*<meta name="theme-color" content={theme.palette.primary.main} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
        rel="stylesheet"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/admin/favicons/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#303030" /> */}
    </Head>
  );
};

HeadComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
export default HeadComponent;
