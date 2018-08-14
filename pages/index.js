import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers/index';

const store = createStore(reducers);

const Index = () => (
  <Provider store={store}>
    <div>
      <h1>Hello</h1>
    </div>
  </Provider>
);

export default Index;
