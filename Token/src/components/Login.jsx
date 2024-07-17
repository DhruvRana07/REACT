import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email} // eve.holt@reqres.in
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            data-testid="email-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            data-testid="password-input"
            required
          />
        </div>
        <button type="submit" data-testid="login-button" className="login-button">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message" data-testid="error-message">{error}</p>}
    </div>
  );
};

export default Login;
