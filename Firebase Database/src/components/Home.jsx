// src/components/Home.jsx
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for amazing products at unbeatable prices.</p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <p>Check out some of our popular items that you might love!</p>
        {/* Add a component or list of featured products here */}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
