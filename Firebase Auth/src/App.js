import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import GoogleSignIn from './components/auth/GoogleSignIn';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route
          path="/signup"
          element={<SignUp isActive={true} />}
        />
        <Route
          path="/login"
          element={<Login isActive={false} />}
        />
      </Routes>
      <div className="separator">
        <hr className="line" />
        <span className="text">OR</span>
        <hr className="line" />
      </div>
      <GoogleSignIn />
      <Footer />
    </div>
  );
};

export default App;
