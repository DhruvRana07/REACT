import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reqres.in/api/login', { email, password })
      .then(response => {
        const data = response.data;
        if (data.token) {
          setAuth(true);
          navigate('/products');
        } else {
          alert('Login failed');
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="main-content">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email" 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password" 
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
