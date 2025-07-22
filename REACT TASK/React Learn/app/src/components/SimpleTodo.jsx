import React, { useReducer, useState } from "react";

// Simple reducer for adding todo
function todoReducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.text];
  }
  return state;
}

function SimpleTodo() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo App</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => {
        dispatch({ type: "ADD", text });
        setText("");
      }}>
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleTodo;
