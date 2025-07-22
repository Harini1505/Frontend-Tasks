import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
        <hr />
        <h4>Question 7</h4>
      <h3>Controlled Input Example</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>You typed: {inputValue}</p>
      <br /><br /><br />
    </div>
  );
}

export default ControlledInput;