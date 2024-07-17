import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <p>Token: <span className="token">{token}</span></p>
      <button onClick={logout} data-testid="logout-button" className="logout-button">Logout</button>
    </div>
  );
};

export default Dashboard;
