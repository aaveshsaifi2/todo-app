import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app">
      <h2>Todo App</h2>

      <TodoInput addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
