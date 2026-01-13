'use client';

import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaTwitter, FaFacebookF, FaDribbble, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="custom-footer">
      <div className="container">
        {/* CTA Section */}
        <div className="footer-cta-section">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 className="footer-cta-heading">
                Join our community by using our services and grow your business.
              </h2>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="#contact" className="btn btn-dark btn-lg footer-cta-btn">
                Try It For Free
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Main Footer Content */}
        <div className="footer-main-content">
          <div className="row">
            {/* Company Info Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="footer-company-info">
                <div className="footer-logo">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={120}
                    height={40}
                    className="d-inline-block align-top"
                    priority
                  />
                </div>
                <p className="footer-copyright">
                  © 2022 Sandbox.<br />
                  All rights reserved.
                </p>
                <div className="footer-social-icons">
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="social-icon" aria-label="Dribbble">
                    <FaDribbble />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Get in Touch Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-column-heading">Get in Touch</h5>
              <div className="footer-contact-info">
                <p className="footer-address">
                  Moonshine St. 14/05<br />
                  Light City, London,<br />
                  United Kingdom
                </p>
                <p className="footer-contact-item">
                  <a href="mailto:info@email.com" className="footer-link">
                    info@email.com
                  </a>
                </p>
                <p className="footer-contact-item">
                  <a href="tel:+1234567890" className="footer-link">
                    00 (123) 456 78 90
                  </a>
                </p>
              </div>
            </div>

            {/* Learn More Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-column-heading">Learn More</h5>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Our Story</a></li>
                <li><a href="#" className="footer-link">Projects</a></li>
                <li><a href="#" className="footer-link">Terms of Use</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-column-heading">Our Newsletter</h5>
              <p className="footer-newsletter-desc">
                Subscribe to our newsletter to get our news & deals delivered to you.
              </p>
              <form className="footer-newsletter-form">
                <input 
                  type="email" 
                  className="footer-newsletter-input" 
                  placeholder="Email Address"
                />
                <button type="submit" className="btn btn-dark footer-newsletter-btn">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="scroll-to-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FiArrowUp />
        </button>
      )}
    </footer>
  );
}

