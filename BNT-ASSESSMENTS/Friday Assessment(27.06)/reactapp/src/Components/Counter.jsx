import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial count is 0

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <hr />
        <h4>Question 1</h4>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Counter;