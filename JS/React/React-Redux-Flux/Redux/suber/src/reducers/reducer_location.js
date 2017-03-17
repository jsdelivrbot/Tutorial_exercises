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

//main
export default (state = INITSTATE, action) => {

  switch(action.type)
  {
    default:
      return state;
  }

}
