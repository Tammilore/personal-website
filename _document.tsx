import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var script = document.createElement('script');
                  script.src = 'https://datapulse.app/datapulse.min.js';
                  script.defer = true;
                  script.id = 'datapulse';
                  script.dataset.endpoint = 'https://datapulse.app/api/v1/event';
                  script.dataset.workspace = 'clppoexp51s56cl37xy8h9beg';
                  document.head.appendChild(script);
                })()
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
