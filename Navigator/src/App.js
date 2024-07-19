import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PrivateRoute from './Routes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import './styles.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/*" element={<PrivateRoute />}>
            <Route path="" element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
