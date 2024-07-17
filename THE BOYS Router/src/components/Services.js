// src/components/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <section className="services-content">
        <div className="service">
          <img src="https://assets.aboutamazon.com/dims4/default/1485fc0/2147483647/strip/true/crop/3000x2000+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F2e%2Fb7%2Fb237596246d583c6aa81e07a1fb0%2Fthby-s4-ut-404-221104-savjas-00416-r1-3000.jpg" alt="Service 1" />
          <h3>Emergency Response</h3>
          <p>Rapid deployment to handle emergencies such as natural disasters, accidents, and other crises.</p>
        </div>
        <div className="service">
          <img src="https://assets.aboutamazon.com/dims4/default/289ce83/2147483647/strip/true/crop/4000x2666+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc2%2F30%2F8315d0404fda8a24a379244e6b8b%2Fthby-s3-ut-306-210614-savjas-00266-1.JPG" alt="Service 2" />
          <h3>Public Relations</h3>
          <p>Managing public perception and relations, portraying superheroes as symbols of hope and trust.</p>
        </div>
        <div className="service">
          <img src="https://assets.aboutamazon.com/dims4/default/c3465c4/2147483647/strip/true/crop/3900x2600+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F8f%2F65%2F5c8181e04c719a5ca284f998b2d0%2Fthby-s3-ut-304-210429-savjas-00268-1-1.jpg" alt="Service 3" />
          <h3>Crime Fighting</h3>
          <p>Combatting crime and apprehending criminals using superhuman abilities and advanced technology.</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
