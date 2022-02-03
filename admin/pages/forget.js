import HeadComponent from '../src/components/head';
import { wrapper } from '../src/redux/store';
import { Fragment } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { checkCookies, getCookies } from 'cookies-next';

function Forget(props) {
  const { t, ready, i18n } = useTranslation('common');
  return (
    <Fragment>
      <HeadComponent title={ready && t('title')} />
      this is forget page in main pages folder
    </Fragment>
  );
}

export default withTranslation('common')(Forget);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    if (checkCookies('adminAccessToken', ctx)) {
      return {
        props: {
          adminAccessToken: getCookies(ctx).adminAccessToken,
          ...(await store.dispatch({
            type: 'ADMIN_ACCESS_TOKEN',
            payload: getCookies(ctx).adminAccessToken,
          })),
        },
        redirect: {
          permanent: false,
          source: '/',
          destination: '/dashboard',
        },
      };
    } else {
      return {
        props: {
          adminAccessToken: null,
          ...(await store.dispatch({
            type: 'ADMIN_ACCESS_TOKEN',
            payload: null,
          })),
        },
      };
    }
  }
);
