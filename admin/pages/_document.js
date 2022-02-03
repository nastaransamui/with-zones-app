import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Prompt&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
          <div
            id='preloader'
            style={{
              position: 'fixed',
              zIndex: 10000,
              background: '#fafafa',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <noscript>
              <p>Please enabled javascript to continue</p>
            </noscript>
            <img
              style={{
                opacity: 0.5,
                position: 'fixed',
                top: 'calc(50% - 50px)',
                left: 'calc(50% - 50px)',
              }}
              src='/admin/images/loading.gif'
              alt='loading'
            />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
