import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggleButton.css';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="navbar" style={{ backgroundColor: theme === 'light' ? '#ffffff' : '#212529', color: theme === 'light' ? '#212529' : '#f8f9fa' }}>
            <div className="navbar-content">
                <div className="image-content">
                    <img src="https://t3.ftcdn.net/jpg/06/18/50/02/360_F_618500220_DotfR7vPyl1fZz2qP02ZzIGuTwAHpQPn.jpg" alt="Sample" />
                </div>
                <div className="text-content">
                    <h1>Localbox Miner</h1>
                    <h3>This theme is {theme === 'light' ? 'Light' : 'Dark'}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
                        viverra orci. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Etiam sit amet dolor et mauris
                        vestibulum elementum sit amet sed ipsum. Proin sed orci a felis congue
                        bibendum et at massa. Curabitur sit amet malesuada nunc. Proin ut velit
                        quis erat malesuada scelerisque. Quisque sed sapien arcu. Duis auctor
                        erat in nunc malesuada, quis venenatis sem dapibus. Nam aliquet ex nec
                        felis hendrerit, eget efficitur risus fringilla. Nulla facilisi. Sed
                        gravida, dui sed laoreet sagittis, turpis mi varius quam, non efficitur
                        velit elit ac magna. Curabitur auctor velit a turpis sollicitudin
                        posuere. Cras non risus id eros bibendum tempus. Sed id nulla id velit
                        varius scelerisque ac sed purus. Suspendisse potenti. In euismod ligula
                        nec lacus ullamcorper, nec interdum purus vehicula.
                    </p>
                    <div className="button-container">
                        <button className={theme} onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center' }}>
                            {theme === 'light' ? (
                                <>
                                    <FontAwesomeIcon icon={faMoon} style={{ marginRight: '10px' }} /> Dark Theme
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faSun} style={{ marginRight: '10px' }} /> Light Theme
                                </>
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggleButton;
