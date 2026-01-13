'use client';

import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
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
            <div className="col-12 col-lg-8 mb-3 mb-lg-0">
              <h2 className="footer-cta-heading" style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700', color: '#1c2539', lineHeight: '1.25', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}>
                Partner with us, explore our businesses or discover new career opportunities across our group.
              </h2>
            </div>
            <div className="col-12 col-lg-4 text-center text-lg-end">
              <a href="/contact-us" className="btn btn-dark btn-lg footer-cta-btn w-100 w-lg-auto">
                Contact Our Team
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
                <div className="footer-logo mb-3">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={240}
                    height={46}
                    className="d-inline-block align-top"
                    priority
                  />
                </div>
                <p className="footer-copyright mb-4" style={{ fontSize: '0.9375rem', color: '#6c757d', lineHeight: '1.6' }}>
                  Mohamed Abdulrahman Al-Bahar Group is a diversified Kuwaiti business group representing leading global brands in consumer goods, electronics, technology, shipping and travel.
                </p>
                <div className="footer-social-icons">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="social-icon" aria-label="X (Twitter)">
                    <FaTwitter />
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
                  Al Bahar Group Headquarters<br />
                  Kuwait City, State of Kuwait
                </p>
                <p className="footer-contact-item">
                  <a href="mailto:info@albahargroup.com" className="footer-link">
                    info@albahargroup.com
                  </a>
                </p>
                <p className="footer-contact-item">
                  <a href="tel:+965XXXXXXXXX" className="footer-link">
                    +965 XXX XXXX XX
                  </a>
                </p>
              </div>
            </div>

            {/* Learn More Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h5 className="footer-column-heading">Learn More</h5>
              <ul className="footer-links-list">
                <li><a href="/about-us" className="footer-link">About Us</a></li>
                <li><a href="/businesses" className="footer-link">Our Businesses</a></li>
                <li><a href="/capabilities" className="footer-link">Capabilities</a></li>
                <li><a href="/corporate-info" className="footer-link">Corporate Info</a></li>
                <li><a href="/corporate-info/news-updates" className="footer-link">News & Updates</a></li>
                <li><a href="/corporate-info/careers" className="footer-link">Careers</a></li>
                <li><a href="/corporate-info/partnerships" className="footer-link">Our Partnerships</a></li>
                <li><a href="/contact-us" className="footer-link">Contact Us</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-column-heading">Our Newsletter</h5>
              <p className="footer-newsletter-desc">
                Subscribe to receive updates on our businesses, partnerships, community initiatives and career opportunities.
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

        {/* Copyright Section */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col-12 text-center">
            <p className="mb-0" style={{ fontSize: '0.875rem', color: '#6c757d' }}>
              © 2026 Mohamed Abdulrahman Al-Bahar Group. All rights reserved.
            </p>
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

