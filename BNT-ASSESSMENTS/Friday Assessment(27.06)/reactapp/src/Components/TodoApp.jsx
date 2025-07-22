import React, { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  // Add a new task
  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodoList([...todoList, task]);
    setTask("");
  };

  // Delete task by index
  const handleDelete = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <hr />
      <h4>Question 11</h4>
      <h2>Todo App</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {todoList.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todoList.length === 0 && <p>No tasks.</p>}
    </div>
  );
}

export default TodoApp;
