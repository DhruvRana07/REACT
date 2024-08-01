import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { signOutUser } from '../firebaseConfig';
import '../styles/Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
            Home
          </NavLink>
        </li>
        {currentUser && (
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
              Dashboard
            </NavLink>
          </li>
        )}
      </ul>
      <div className="navbar-user">
        {currentUser ? (
          <>
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="user-photo"
            />
            <span className="user-name">{currentUser.displayName}</span>

            <button onClick={signOutUser} className="signout-button">Sign Out</button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : 'login-link'}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
