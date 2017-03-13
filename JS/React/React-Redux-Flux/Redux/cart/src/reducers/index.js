import { combineReducers } from 'redux';
import itemReducer from './item';
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
  items: itemReducer,
  shoppingCart: shoppingCartReducer
});

export default rootReducer;
