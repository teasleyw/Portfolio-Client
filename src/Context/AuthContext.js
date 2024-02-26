// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login function
    const login = () => {
      // Perform login logic
      console.log('Logging in...');
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      };

    const logout = () => {
      // Perform logout logic
      setIsLoggedIn(false);
    };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);