// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home page">
      <div className="hero">
        <img src="https://assets.aboutamazon.com/9a/65/4a2b505c4e20b0be57c8d5f62eff/theboyz-hero-v2.jpg" alt="Hero" />
        <div className="hero-text">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop solution for all Superhero needs.</p>
        </div>
      </div>
      <section className="features">
        <h2>Our Superheroes</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://assets.aboutamazon.com/dims4/default/bd4ee82/2147483647/strip/true/crop/3000x2000+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd8%2F24%2F0b3d50994b3f8875c29df9eeb046%2Fthby-s3-ut-304-210218-thijan-00201-1.JPG" alt="Feature 1" />
            <h3>HOMELANDER</h3>
            <p>The Homelander is a patriotic superhero who leads the superhero team, The Seven, and the most powerful superhuman created by Vought-American.</p>
          </div>
          <div className="feature-card">
            <img src="https://assets.aboutamazon.com/dims4/default/aeff078/2147483647/strip/true/crop/4000x2666+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fad%2F91%2Feb4bee8b414c97d64a6c1987774b%2Fthby-s3-ut-306-210706-savjas-00588-1.JPG" alt="Feature 2" />
            <h3>BUTCHER</h3>
            <p>Billy Butcher, The Ruthless leader of The Boys, is driven by a personal vendetta against superheroes.</p>
          </div>
          <div className="feature-card">
            <img src="https://assets.aboutamazon.com/dims4/default/c94637b/2147483647/strip/true/crop/3000x2000+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F29%2F57%2F7bc5a059436e885b68b9423aa5d7%2Fthby-s3-ut-302-210222-thijan-00914-1.jpg" alt="Feature 3" />
            <h3>STARLIGHT</h3>
            <p>Starlight, also known as Annie January, her light-based powers and moral compass, striving to bring justice and integrity to a corrupt world.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
