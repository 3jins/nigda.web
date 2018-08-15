import Document, { Head, Main, NextScript } from 'next/document';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import flush from 'styled-jsx/server';

import reducers from '../reducers/index';
import stylesheet from '../styles/index.sass';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = flush();
    return { ...initialProps, styles };
  }

  render() {
    const store = createStore(reducers);
    return (
      <html lang="ko">
        <Head>
          <title>[니]가 [그]리고 싶은 거 [다] 그려!</title>
        </Head>
        <body>
          <Provider store={store}>
            <Main />
          </Provider>
          <NextScript />
        </body>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </html>
    );
  }
}
