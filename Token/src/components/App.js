import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';
import Login from './Login';
import Dashboard from './Dashboard';

const App = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div>
      {isAuth ? <Dashboard /> : <Login />}
    </div>
  );
};

export default App;
