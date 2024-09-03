import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleTheme } from '../store/actions';
import '../styles/Theme.css';

const Theme = () => {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <div className="theme-switcher">
            <button
                onClick={() => dispatch(handleTheme('light'))}
                disabled={theme === 'light'}
            >
                Switch to Light
            </button>
            <button
                onClick={() => dispatch(handleTheme('dark'))}
                disabled={theme === 'dark'}
            >
                Switch to Dark
            </button>
        </div>
    );
};

export default Theme;
