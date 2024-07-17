// src/App.jsx
import React from 'react';
import { ThemeProvider } from './context/ThemeContext'; // Correct import
import ThemeToggleButton from './components/ThemeToggleButton';
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
