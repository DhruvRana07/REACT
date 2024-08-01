import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebaseConfig';
import GoogleButton from 'react-google-button';

const Login = () => {
  const navigate = useNavigate();

  const loginStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '100px auto',
    transition: 'box-shadow 0.3s ease',
  };

  const headerStyle = {
    marginTop: '0',
    marginBottom: '30px',
    fontSize: '28px',
    color: '#303f9f',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    letterSpacing: '1px',
  };

  const googleButtonStyle = {
    display: 'block',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 'bold',
    backgroundColor: '#4285f4',
    color: '#fff',
    borderRadius: '6px',
    padding: '3px 3px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    border: 'none',
    margin: '0 auto',
  };

  const handleMouseEnter = (e) => {
    e.target.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    e.target.style.transform = 'translateY(0)';
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard'); // Navigate to Dashboard on successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div style={loginStyle}>
      <h1 style={headerStyle}>Login Page</h1>
      <GoogleButton
        style={googleButtonStyle}
        onClick={handleLogin}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Login;
