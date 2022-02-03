import PropTypes from 'prop-types';

const ErrorPage = ({ t, router, i18n }) => {
  return <div>{t('title')}</div>;
};

ErrorPage.propTypes = {
  t: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default ErrorPage;
