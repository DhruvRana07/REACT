import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast notifications

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
    <ToastContainer />
  </Router>
);
