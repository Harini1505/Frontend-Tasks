import React, { useState } from 'react';

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
        <hr />
        <h4>Question 6</h4>
      <label style={{ color: "violet", padding: "10px" , fontSize: "1.5rem"}}>
        <input type="checkbox" onChange={handleChange}  />
        Check Me
      </label>

      {isChecked && <p>You checked the box!</p>}
      <br /><br /><br />
    </div>
  );
}

export default Checkbox;