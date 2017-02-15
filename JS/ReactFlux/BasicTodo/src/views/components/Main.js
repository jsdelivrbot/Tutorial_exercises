import React from 'react';

const Main = (props) => {
  if(props.todo.size === 0){
    return null;
  }
  return(
    <section id="main">
      <ul id="todo-list">
        {[...props.todos.values()].reverse().map(todo => (
          <li key={todo.id}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.complete}
                onChange={
                  // Empty function for now, we will implement this later.
                  () => {}
                }
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={
                  // Empty function for now, we will implement this later.
                  () => {}
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Main;
