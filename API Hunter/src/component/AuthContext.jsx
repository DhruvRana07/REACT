import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [Auth, setAuth] = useState({
    isAuth: false,
    token: null,
  });
  const [notification, setNotification] = useState({ message: null, type: 'success' });

  function Login(value) {
    setAuth({ isAuth: true, token: value });
    setNotification({ message: "Successfully logged in ! 😉", type: 'success' });
  }

  function Logout() {
    setAuth({ isAuth: false, token: null });
    setNotification({ message: "Successfully logged out! 😭", type: 'error' });
  }

  function clearNotification() {
    setNotification({ message: null, type: 'success' }); 
  }

  return (
    <AuthContext.Provider value={{ Auth, Login, Logout, notification, clearNotification }}>
      {children}
    </AuthContext.Provider>
  );
}
