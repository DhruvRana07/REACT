import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: ""
  });

  const login = async (credentials) => {
    setState({ ...state, loading: true, error: null });
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        setState({ ...state, isAuth: true, loading: false, token: data.token });
      } else {
        setState({ ...state, loading: false, error: data.error });
      }
    } catch (error) {
      setState({ ...state, loading: false, error: 'Something went wrong!' });
    }
  };

  const logout = () => {
    setState({ isAuth: false, loading: false, error: null, token: "" });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
