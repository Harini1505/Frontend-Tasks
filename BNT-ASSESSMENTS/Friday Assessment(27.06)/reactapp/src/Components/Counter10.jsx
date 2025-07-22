import React, { useState } from 'react';

function Counter10() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 10) {
      setCount(0);
    } else {
      setCount(count + 1); 
    }
  };

  return (
    
    <div style={{ padding: '20px' }}>
        <hr />
        <h4>Question 12</h4>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter10;