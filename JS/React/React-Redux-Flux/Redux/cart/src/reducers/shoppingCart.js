const INIT_STATE = [];
import { ADD_TO_CART } from '../actions';

export default ( state=INIT_STATE, action ) => {

  switch(action.type)
  {
    case ADD_TO_CART:
      console.log(`payload is ${action.payload}`);
      return [...state, action.payload];
      break;

    default:
        return state;
  }

}
