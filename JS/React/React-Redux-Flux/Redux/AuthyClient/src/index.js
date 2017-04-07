/**
 *
 *  @summary : Scaffold React/Redux and inject routes into application
 */

//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Redux modules
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Actions
import { AUTH_USER } from './actions/types';

//middleware modules
import reduxThunk from 'redux-thunk'

//Application moudules
import reducers from './reducers/reducer_rootReducer';

import routes from './routes';

//Wrap middleware around store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

//Inject reducers into store and call Redux Dev tools
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Retrieve token from local storage is exists and dispatch AUTH_USER action to ensure
//page refreshes do not break token logic
const token = localStorage.getItem('token');
token ? store.dispatch({ type: AUTH_USER }) : null

//Render react application to .container
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));
