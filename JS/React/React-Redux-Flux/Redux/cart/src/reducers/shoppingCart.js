const INIT_STATE = [];
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

export default ( state=INIT_STATE, action ) => {

  switch(action.type)
  {
    //combine previous state with new item selected
    case ADD_TO_CART:
      return [...state, action.payload];
      break;
    //Filter through previous state and remove item with
    //matching id
    case REMOVE_FROM_CART:
      const keepItem = (item) => { return item.id !== action.payload };
      return state.filter(keepItem);
    //return current state
    default:
        return state;
  }

}
