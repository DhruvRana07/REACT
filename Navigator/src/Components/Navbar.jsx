import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navbar;
