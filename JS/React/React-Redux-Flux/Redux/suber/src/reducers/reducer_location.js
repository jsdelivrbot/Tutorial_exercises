/**
*
* @summary : Hold state for journey coordinate information
* @notes   : (1) req destructuring plugin 
*/

//set initial state
const INITSTATE = {
  startLat: '',
  startLng: '',
  endLat: '',
  endLng: ''
}

//reducer actions
import { ADD_LOCATION } from '../actions'; 


export default (state = INITSTATE, action) => {

  switch(action.type)
  {
    case ADD_LOCATION:
      return { ...state, ...action.payload }
      break;
    default:
      return state;
  }

}
