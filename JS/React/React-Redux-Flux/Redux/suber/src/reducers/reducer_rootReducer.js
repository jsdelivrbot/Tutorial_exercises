/**
*
* @summary : Combine all seperate reducers to form single store
*
*/

import { combineReducers } from 'redux';

import locationReducer from './reducer_services';
import serviceReducer from './reducer_location';

const rootReducer = combineReducers({
  location: locationReducer,
  services: serviceReducer
});

export default rootReducer;
