import React from 'react';

function UserItem({userItem, id, removeUser}) {
  return (
      <div className="container">
        <div className="list-group-item">{userItem.name}</div>
        <div>
          <button className='x-btn' onClick={() => removeUser(id)}>x</button>
        </div>
      </div>
  )
}

export default UserItem;
