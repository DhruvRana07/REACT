import React from 'react';
import Counter from './components/Counter';
import Theme from './components/Theme';
import './styles/App.css';

const App = () => {
    return (
        <div className="app">
            <h1>Counter with Theme Switcher</h1>
            <Theme />
            <Counter />
        </div>
    );
};

export default App;
