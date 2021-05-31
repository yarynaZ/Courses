import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import UserItem from "../components/UserItem";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
      );

      const json = await res.json();
      setUsers(json);
    }

    fetchData();
  }, []);


  const { url } = useRouteMatch();

  const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
      async function fetchData() {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const json = await res.json();
        setUser(json);
      }

      fetchData();
    }, [id]);

    return (
        <div className="card" style={{width: '300px'}}>
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-sub-title mb-2 text-muted">{user.email}</h6>
          </div>
        </div>
    );
  }

  const removeUser = index => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  return (
      <div className="users-page">
        <div className="list-group">
          {
            users.map((userItem, index) => <div className="list-group-item users">
              <Link to={`${url}/${userItem.id}`} className="btn btn-secondary btn-sm">{userItem.name}</Link>
              <UserItem userItem={userItem}
                        index={index}
                        removeUser={removeUser}
                        key={index}/>
            </div>)
          }
      </div>
        <Route path="/users/:id">
          {/* <Route path={`${path}/:id/`}> */}
          <User />
        </Route>
      </div>
  );
}

export default Users;