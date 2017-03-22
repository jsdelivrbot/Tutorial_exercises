/**
*
* @summary : Hold service state
*
*/

const INIT_STATE = [];
import { FIND_SERVICES } from '../actions';


export default(state = INIT_STATE, action ) => {

  switch(action.type)
  {
    //Incoming transport/cost
    case FIND_SERVICES:
      return action.payload;
    
    //default response 
    default:
      return state;
  }

}
