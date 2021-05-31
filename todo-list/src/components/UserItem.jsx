import React from 'react';

function UserItem({userItem, index, removeUser}) {
  return (
      <div className="container">
        <div className="list-group-item">{userItem.name}</div>
        <div>
          <button className='x-btn' onClick={() => removeUser(index)}>x</button>
        </div>
      </div>
  )
}

export default UserItem;
