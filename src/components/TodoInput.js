import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="input-box">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoInput;
