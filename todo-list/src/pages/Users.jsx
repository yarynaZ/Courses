import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
      );

      const json = await res.json();
      setUsers(json)
    }

    fetchData();
  }, [count]);

  return (
      <div className="list-group">
        {
          users.map((user) => <div className="list-group-item" key={user.id}>{user.name}</div>)
        }
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
      </div>
  )
}

export default Users;