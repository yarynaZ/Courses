import React from 'react';


function TodoItem({todoItem, index, removeTodo}) {
  return (
      <div className="container">
        <div className="list-group-item">{todoItem.title}</div>
        <div>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
  )
}

export default TodoItem;