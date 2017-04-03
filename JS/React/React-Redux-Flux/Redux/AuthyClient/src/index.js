//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//Redux modules
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//middleware modules
import reduxThunk from 'redux-thunk'

//Application moudules
import reducers from './reducers/reducer_rootReducer';

import routes from './routes';

//Wrap middleware around store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

//Inject reducers into store and call Redux Dev tools
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>
  , document.querySelector('.container'));
