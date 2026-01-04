import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  return (
    <li className="todo-item">
      {isEdit ? (
        <input value={text} onChange={(e) => setText(e.target.value)} />
      ) : (
        <span>{todo.text}</span>
      )}

      <div className="todo-actions">
        {isEdit ? (
          <button
            className="save"
            onClick={() => {
              updateTodo(todo.id, text);
              setIsEdit(false);
            }}
          >
            Save
          </button>
        ) : (
          <button className="edit" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        )}

        <button
          className="delete"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
