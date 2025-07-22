import React, { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (pwd) => {
    const minLength = pwd.length >= 8;
    const uppercase = (pwd.match(/[A-Z]/g) || []).length >= 2;
    const lowercase = /[a-z]/.test(pwd);
    const number = /[0-9]/.test(pwd);
    const special = /[@$_]/.test(pwd);

    if (minLength && uppercase && lowercase && number && special) {
      return "Strong Password";
    } else {
      return "Weak Password";
    }
  };

  const Change = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setMessage(validatePassword(pwd));
  };

  return (
    <div>
      <h2>Password Strength</h2>
      <input type="password" value={password} onChange={Change} placeholder="Enter password"  />
      <p style={{ color: message === "Strong Password" ? "green" : "red" }}> {message}</p>
    </div>
  );
}

export default PasswordStrength;
