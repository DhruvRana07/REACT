import React from 'react';
import CounterValue from './CounterValue';
import CounterButtons from './CounterButtons';
import { useSelector } from 'react-redux';
import '../styles/Counter.css';

const Counter = () => {
    const theme = useSelector((state) => state.theme.theme);
    const themeClass = theme === 'light' ? 'light_theme' : 'dark_theme';

    return (
        <div className={`counter ${themeClass}`}>
            <CounterValue />
            <CounterButtons />
        </div>
    );
};

export default Counter;
