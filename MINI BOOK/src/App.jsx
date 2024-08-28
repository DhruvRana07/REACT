import React, { useState } from 'react';
import Fiction from './components/Fiction';
import NonFiction from './components/NonFiction';
import fictionBooks from "./fiction.json";
import nonFictionBooks from './nonfiction.json';
import './App.css';

const App = () => {
  const [isFiction, setIsFiction] = useState(true);

  const handleToggle = () => {
    setIsFiction(!isFiction);
  };

  return (
    <div className="App">
      <button data-testid="toggle-btn" onClick={handleToggle}>
        {isFiction ? 'Show Non-Fiction Books' : 'Show Fictional Books'}
      </button>
      <div data-testid="conditional-container">
        {isFiction ? (
          <Fiction books={fictionBooks} />
        ) : (
          <NonFiction books={nonFictionBooks} />
        )}
      </div>
    </div>
  );
};

export default App;
