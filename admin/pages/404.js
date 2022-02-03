import HeadComponent from '../src/components/head';
import { wrapper } from '../src/redux/store';
import { Fragment } from 'react';
import ErrorPage from '../src/pages/ErrorPage';
import { withTranslation, useTranslation } from 'react-i18next';

function Custom404(props) {
  const { t, ready, i18n } = useTranslation('common');
  return (
    <Fragment>
      <HeadComponent title={ready && t('title')} />
      <ErrorPage {...props} t={t} i18n={i18n} />
    </Fragment>
  );
}

export default withTranslation('common')(Custom404);

export const getStaticProps = wrapper.getStaticProps((store) => async (ctx) => {
  return {
    props: {
      adminAccessToken: null,
    },
  };
});
