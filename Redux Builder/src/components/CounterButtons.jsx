import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAdd, handleReduce, handleReset } from '../store/actions';

const CounterButtons = () => {
    const dispatch = useDispatch();

    return (
        <div className="counter-buttons">
            <button onClick={() => dispatch(handleAdd(1))}>ADD</button>
            <button onClick={() => dispatch(handleReset())}>RESET</button>
            <button onClick={() => dispatch(handleReduce(1))}>REDUCE</button>
        </div>
    );
};

export default CounterButtons;
