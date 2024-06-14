import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">logo</div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="social-icons">
                <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
                <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
                <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
            </div>
        </header>
    );
}

export default Header;
