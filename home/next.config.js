const { NEXT_PUBLIC_ADMIN_URL } = process.env;
const { i18n } = require('./next-i18next.config');
module.exports = {
  i18n,
  env: {
    SECRET_KEY: 'something here for key',
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/admin',
        destination: `${NEXT_PUBLIC_ADMIN_URL}/admin`,
      },
      {
        source: '/admin/:path*',
        destination: `${NEXT_PUBLIC_ADMIN_URL}/admin/:path*`,
      },
    ];
  },
};
