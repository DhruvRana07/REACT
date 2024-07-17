// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import './styles.css';

function App() {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/services", title: "Services" }
  ];

  return (
    <Router>
      <div>
        <nav className="nav">
          {links.map((link) => (
            <div key={link.path} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.title}
              </NavLink>
            </div>
          ))}
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
