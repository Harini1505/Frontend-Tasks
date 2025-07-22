// AuthStatus.jsx

import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function AuthStatus() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <>
    <br/>
    <hr/>
    <div>
      <h2>{isLoggedIn ? '🟢 Logged In' : '🔴 Logged Out'}</h2>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
    </>
  );
}

export default AuthStatus;
