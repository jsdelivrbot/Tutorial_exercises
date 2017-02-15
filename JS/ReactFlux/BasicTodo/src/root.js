import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<AppContainer/>,
                document.getElementById('todoapp'));


//Mimic data added to the store
import TodoActions from './data/TodoActions';

TodoActions.addTodo('New basic task');
TodoActions.addTodo('Another basic task');
TodoActions.addTodo('A third basic task');                
