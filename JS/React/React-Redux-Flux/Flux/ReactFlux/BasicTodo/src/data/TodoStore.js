import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {

  constructor(){
    super(TodoDispatcher);
  }

  getInitialState(){
    return Immutable.OrderedMap();
  }

  reduce(state, action){
    switch (action.type) {

      //Check to see if the Dispatcher has passed an ADD action
      case TodoActionTypes.ADD_TODO:
      console.log('Called add to');
        if(!action.text){
          return state;
        }
        else{
          const id = Counter.increment();
          return state.set(id, new Todo({
            id,
            text: action.text,
            complete: false
          }));
        }
        break;

      default:
        return state;
    }
  }

}//end TodoStore

export default new TodoStore();
