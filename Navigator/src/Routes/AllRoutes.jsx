import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Products from '../Components/Products';
import Login from '../Components/Login';
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;
