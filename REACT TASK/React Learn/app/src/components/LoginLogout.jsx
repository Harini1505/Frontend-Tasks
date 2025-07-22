// App.jsx

import React from 'react';
import { AuthProvider } from './AuthContext';
import AuthStatus from './AuthStatus';

function LoginLogout() {
  return (
    <AuthProvider>
      <AuthStatus />
    </AuthProvider>
    
  );
}

export default LoginLogout;
