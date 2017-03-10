import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';

function getStores(){
  return [
    TodoStore
  ];
}

/**
* @function : 
*/
function getState(){
  return {
    todos: TodoStore.getState()
  }
},

/**
* @function : Test function checking out a new language
*/
function getTest(){
  return {

  }
}

export default Container.createFunctional(AppView, getStores, getState);
