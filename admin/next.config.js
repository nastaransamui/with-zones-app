module.exports = {
  basePath: '/admin',
  async redirects(){
    return [
      {
        source: "/",
        destination: "/admin",
        permanent: true,
        basePath: false
      }
    ]
  }
}
