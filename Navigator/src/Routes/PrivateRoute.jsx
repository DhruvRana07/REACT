import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  return auth ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />;
};

export default PrivateRoute;
