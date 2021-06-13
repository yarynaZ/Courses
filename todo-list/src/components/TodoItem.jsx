import React from 'react';


function TodoItem({todoItem, removeTodo, id}) {
  return (
      <div className="container">
        <div className="list-group-item">{todoItem.title}</div>
        <div>
          <button className='x-btn' onClick={() => removeTodo(id)}>x</button>
        </div>
      </div>
  )
}

export default TodoItem;