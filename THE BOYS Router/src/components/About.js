// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>" Empowering heroes to protect and inspire a better world "</p>
        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/04/The-boys.jpeg" alt="About us background" className="about-image" />
      </header>
      <section className="our-story">
        <h2>Our Story : </h2>
        <p>
          In a world where crime and chaos threaten the fabric of society, the need for a superhero company becomes evident. These heroes, equipped with extraordinary abilities, stand as the last line of defense against powerful villains and natural disasters. They not only protect the innocent but also inspire hope and unity, ensuring that justice and peace prevail in times of crisis.
        </p>
      </section>
      <section className="our-values">
        <h2>Our Values : </h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Protection and Security</h3>
          </div>
          <div className="value-item">
            <h3>Inspiration and Hope</h3>
          </div>
          <div className="value-item">
            <h3>Emergency Response</h3>
          </div>
          <div className="value-item">
            <h3>Moral Guidance</h3>
          </div>
          <div className="value-item">
            <h3>Community Engagement</h3>
          </div>
          <div className="value-item">
            <h3>Advancing Technology and Science</h3>
          </div>
          <div className="value-item">
            <h3>Global Protection</h3>
          </div>
          <div className="value-item">
            <h3>Personal Assistance</h3>
          </div>
          <div className="value-item">
            <h3>Environmental Stewardship</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
