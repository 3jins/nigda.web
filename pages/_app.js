import App, { Container } from 'next/app';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers/index';

class Nigda extends App {
  render() {
    const { Component, pageProps } = this.props;
    const store = createStore(reducers);
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default Nigda;
