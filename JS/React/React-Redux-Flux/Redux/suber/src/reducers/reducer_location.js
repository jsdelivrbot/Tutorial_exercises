/**
*
* @summary : Hold state for journey coordinate information
*
*/

//set initial state
const INITSTATE = {
  startLatitude: '',
  startLongitude: '',
  endLongitude: '',
  endLatitude: ''
}

//reducer actions
import { ADD_LOCATION } from '../actions'; 


export default (state = INITSTATE, action) => {

  switch(action.type)
  {
    case ADD_LOCATION:
      return { ...state, ...action.payload }
    default:
      return state;
  }

}//end of class
