import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    //create
    const addTodo = (text) => {
        setTodos([...todos,{id: Date.now(), text}]);
    };

    //delete
    const deleteTodo = (id) => {
        setTodos(todos.filter(todos => todos.id !==id));
    };

    //update
    const updateTodo = (id, newText) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, text: newText} : todo
            )
        );
    };

    return (
        <>
        <TodoInput addTodo={addTodo}/>
        <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        />
        </>
    );
}

export default App;