import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li>
      {isEdit ? (
        <input value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span>{todo.text}</span>
      )}

      {isEdit ? (
        <button onClick={() => {
          updateTodo(todo.id, text);
          setIsEdit(false);
        }}>
          Save
        </button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
