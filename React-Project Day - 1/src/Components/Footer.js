import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaFacebook, FaDribbble, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block">
                <div className="footer-logo">
                    <h2>ProHost</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium aspernatur iure molestias.</p>
                    <div className="payment-methods">
                        <FaCcVisa style={{ fontSize: '2em', margin: '5px' }} />
                        <FaCcMastercard style={{ fontSize: '2em', margin: '5px' }} />
                        <FaCcAmex style={{ fontSize: '2em', margin: '5px' }} />
                        <FaPaypal style={{ fontSize: '2em', margin: '5px' }} />
                    </div>
                </div>
            </div>
            <div className="footer-block">
                <h3>Hosting</h3>
                <ul>
                    <li>Web Hosting</li>
                    <li>Cloud Hosting</li>
                    <li>CMS Hosting</li>
                    <li>WordPress Hosting</li>
                    <li>Email Hosting</li>
                    <li>VPS Hosting</li>
                </ul>
            </div>
            <div className="footer-block">
                <h3>Domain</h3>
                <ul>
                    <li>Web Domain</li>
                    <li>Cloud Domain</li>
                    <li>CMS Domain</li>
                    <li>WordPress Domain</li>
                    <li>Email Domain</li>
                    <li>VPS Domain</li>
                </ul>
            </div>
            <div className="footer-block">
                <h3>Newsletter</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloremque earum similique fugiat nobis. Facere?</p>
                <input type="text" placeholder="Recipient's username" />
                <button type="button">Submit</button>
                <div className="social-icons">
                    <FaFacebook style={{ fontSize: '2em', margin: '5px' }} />
                    <FaDribbble style={{ fontSize: '2em', margin: '5px' }} />
                    <FaPinterest style={{ fontSize: '2em', margin: '5px' }} />
                    <FaTwitter style={{ fontSize: '2em', margin: '5px' }} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
