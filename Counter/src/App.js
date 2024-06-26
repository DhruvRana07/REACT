import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isEven = (num) => {
    return num % 2 === 0;
  };

  const getResultColor = (result) => {
    return result ? "true" : "false";
  };

  return (
    <div className="App">
      <h1>Welcome to Counter 2.0</h1>
      <div className="content-wrapper">
        <div className="button-group">
          <button
            className="button"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -1
          </button>
          <button className="button" onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
        <button className="reset-button" onClick={() => setCount(0)}>
          Reset Count
        </button>
        <h2 className="count-display">Count: {count}</h2>
        <p className="result">
          This Number is :{" "}
          <span className={getResultColor(isEven(count))}>
            {isEven(count) ? "Even" : "Odd"}
          </span>
        </p>
        <p className="result">
          Prime Number :{" "}
          <span className={getResultColor(isPrime(count))}>
            {isPrime(count) ? "True" : "False"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
