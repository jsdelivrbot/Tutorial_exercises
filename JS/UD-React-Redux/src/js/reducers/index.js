import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

/**
* @summary
* @return - application state
*/
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
