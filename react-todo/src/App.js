import React from "react";
import TodoList from "./toDo/Todo-list";
import Context from "./toDo/context";
import AddTodo from "./toDo/addTodo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      complited: false,
      title: "Scratch the back",
    },
    {
      id: 2,
      complited: false,
      title: "Kiss me",
    },
    {
      id: 3,
      complited: false,
      title: "Give me flowers",
    },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          complited: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="Wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>you've done well, you've done everything</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
