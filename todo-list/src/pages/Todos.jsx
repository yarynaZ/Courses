import React, {useEffect, useState} from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";

function Todos () {
  const [todos, setTodos] = React.useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
      );

      const json = await res.json();
      setTodos(json);
    }

    fetchData();
  }, []);

  const {url} = useRouteMatch();

  const Todo = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
      async function fetchData() {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        const json = await res.json();
        setTodo(json);
      }

      fetchData();
    }, [id]);

    return (
        <div className="card" style={{width: '300px'}}>
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
          </div>
        </div>
    );
  }

  const addTodo = text => {
    setTodos([...todos, {text}]);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
      <div className="users-page">
        <div className="list-group">
          {
            todos.map((todoItem, index) => <div className="list-group-item users">
              <TodoItem todoItem={todoItem}
                        index={index}
                        removeTodo={removeTodo}
                        key={index}/>
            </div>)
          }
          <br/>
          <TodoForm addTodo={addTodo}/>
        </div>
        <Route path="/todos/:id">
          {/* <Route path={`${path}/:id/`}> */}
          <Todo />
        </Route>
      </div>
  );
}

export default Todos;