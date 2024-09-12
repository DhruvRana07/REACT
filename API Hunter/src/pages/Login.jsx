import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../component/AuthContext';
import axios from "axios";
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Notification from '../component/Notification'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { Login, Auth, notification, clearNotification } = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email: email, password: pass });
      Login(response.data.token);
      navigate('/Dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {notification.message && <Notification message={notification.message} type={notification.type} onClose={clearNotification} />} {}
      
      {}
      <Link to="/" className="back-button">
        ⬅️ Back
      </Link>

      <div className='Login'>
        <h2>Log in</h2>
        <form onSubmit={HandleLogin}>
          <input type="text" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Enter your password' onChange={(e) => setPass(e.target.value)} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
