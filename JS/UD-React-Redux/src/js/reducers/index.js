import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_activeBook';

/**
* @summary - Container responsible for all reducers
* @Notes
* 1.
* @return - application state
*/
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
