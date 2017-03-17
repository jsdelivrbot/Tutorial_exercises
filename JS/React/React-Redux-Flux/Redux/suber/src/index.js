/**
*
* @summary : Main react injection point
*
*/

//General React module imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Redux/middleware components install
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Application routes
import routes from './routes/routes';

//reference to all middleware in use
const middleware = [thunk];

//import root reducer for store
import rootReducer from './reducers/reducer_rootReducer'

//wrap createStore with thunk middleware to check
//all actions that come through before hitting the
//store
const createStorewithMiddleware = applyMiddleware(...middleware)(createStore);

//inject reducers into store
const store = createStorewithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//components
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  ,document.querySelector('.container'));
