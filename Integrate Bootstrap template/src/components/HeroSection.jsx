import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';
import proImage from '../pro.png';

const HeroSection = () => {
  return (
    <div className="container hero-section">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="mb-3">Hi, I'm Dhruv Rana.</h1>
          <h3 className="mb-3">Full Stack Developer</h3>
          <p className="lead">
            A freelance Web developer from London. I convert custom web <br />designs to bootstrap templates.
            <br />
            I make YouTube videos and write Blog.
          </p>
          <a href="#" className="btn btn-primary btn-lg rounded-pill custom-button">I'm Available</a>
          <div className="social-icons mt-4">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
            <a href="https://x.com/i/flow/login"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/"><i className="fab fa-github"></i></a>
            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={proImage} alt="Dhruv Rana" className="img-fluid hero-image" width={1000}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
