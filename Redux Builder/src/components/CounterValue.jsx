import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Counter.css';

const CounterValue = () => {
    const count = useSelector((state) => state.counter.count);

    return (
        <div className="counter-value">
            <h2>Counter : {count}</h2>
        </div>
    );
};

export default CounterValue;
