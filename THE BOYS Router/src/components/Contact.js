// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact page">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: superheroes@company.com</p>
          <p>Phone: +123 456 7890</p>
          <img src="https://assets.aboutamazon.com/dims4/default/01e5da5/2147483647/strip/true/crop/3900x2600+0+0/resize/767x511!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F31%2Fa9%2F933e69644469b97a6e3fedbbfc79%2Fthby-s3-ut-304-210428-savjas-00156-1-1.jpg" alt="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
