import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';

getStores = () => {
  return [
    TodoStore
  ];
}

getState = () => {
  return {
    todos: TodoStore.getState()
  }
}

export default Container.createFunctional(AppView, getStores, getState);
