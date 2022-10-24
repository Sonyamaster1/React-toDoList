import React from "react";
import TodoList from "./toDo/Todo-list";
import Context from "./toDo/context";
import AddTodo from "./toDo/addTodo";

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      complited: false,
      title: "Прочитать книгу",
    },
    {
      id: 2,
      complited: false,
      title: "Помыть посуду",
    },
    {
      id: 3,
      complited: false,
      title: "Написать код",
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
        <h1>To do List</h1>
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
