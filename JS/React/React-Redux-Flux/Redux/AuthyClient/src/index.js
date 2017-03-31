//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Redux modules
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Application moudules
import reducers from './reducers/reducer_rootReducer';

import routes from './routes';

//Wrap middleware around store
const createStoreWithMiddleware = applyMiddleware()(createStore);

//Inject reducers into store and call Redux Dev tools
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));
