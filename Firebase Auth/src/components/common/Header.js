import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';
import '../../components/styles/Common.css';

const Header = () => {
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Successfully logged out!');
      console.log('User signed out');
    } catch (error) {
      toast.error('Logout error: ' + error.message);
      console.error('Logout error:', error.message);
    }
  };

  return (
    <header className="header">
      <nav>
        <Link
          to="/signup"
          className={location.pathname === '/signup' ? 'active-link' : ''}
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className={location.pathname === '/login' ? 'active-link' : ''}
        >
          Login
        </Link>
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </nav>
    </header>
  );
};

export default Header;
