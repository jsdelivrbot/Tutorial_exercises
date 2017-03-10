//Base React imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

const createAppWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createAppWithMiddleware(reducers)}>
    <App />
  </Provider>  
, document.getElementById('container'));
