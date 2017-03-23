/**
*
* @summary : Hold user logged in state
*
*/

import { CHANGE_AUTH } from '../actions/action';


export default(state=false, action) => {

	switch(action.type)
	{
		case CHANGE_AUTH:
			return action.payload
		default:
			return state;
	}

}