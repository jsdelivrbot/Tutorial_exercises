/**
*
* @summary : Main root reducer combining all reducers
*
*/

import { combineReducers } from 'redux';

import authenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
    authentication: authenticationReducer
})

export default rootReducer;

// Sidenote
// insert::  state: (state = {}) => state
// into combine reducers when laying out logic intially prior to mapping routes
// to stop reducer errors 