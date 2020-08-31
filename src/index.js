import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Router from './Router'

import configureStore from './store'
const store = configureStore()

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
