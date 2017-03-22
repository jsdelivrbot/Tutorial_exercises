/**
*
* @summary : Combine all seperate reducers to form single store
*
*/

import { combineReducers } from 'redux';

import locationReducer from './reducer_location';
import serviceReducer from './reducer_services';

const rootReducer = combineReducers({
  location: locationReducer,
  services: serviceReducer
});

export default rootReducer;
