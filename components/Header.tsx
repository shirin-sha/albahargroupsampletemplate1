'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#212529' }}>
          Sandb
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 4px', verticalAlign: 'middle' }}>
            {/* Hexagon */}
            <path d="M12 2L18 5.5V10.5L12 14L6 10.5V5.5L12 2Z" stroke="#212529" strokeWidth="1.5" fill="none"/>
            {/* Three vertical bars */}
            <rect x="9" y="7" width="1.5" height="4" fill="#212529"/>
            <rect x="11.25" y="6" width="1.5" height="6" fill="#212529"/>
            <rect x="13.5" y="8" width="1.5" height="3" fill="#212529"/>
          </svg>
          x
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Demos
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Demo I</a></li>
                <li><a className="dropdown-item" href="#">Demo II</a></li>
                <li><a className="dropdown-item" href="#">Demo III</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Pages
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Services</a></li>
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Shop</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Projects
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Project I</a></li>
                <li><a className="dropdown-item" href="#">Project II</a></li>
                <li><a className="dropdown-item" href="#">Single Project</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Blog
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Blog without Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog with Sidebar</a></li>
                <li><a className="dropdown-item" href="#">Blog Posts</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Blocks
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Blog</a></li>
                <li><a className="dropdown-item" href="#">Contact</a></li>
                <li><a className="dropdown-item" href="#">Features</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Documentation</a>
            </li>
          </ul>

          {/* Right Side - Language Selector & Contact Button */}
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button className="btn btn-link text-dark text-decoration-none dropdown-toggle p-0 d-flex align-items-center" type="button" data-bs-toggle="dropdown">
                EN
                <FiChevronDown className="ms-1" size={14} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">EN</a></li>
                <li><a className="dropdown-item" href="#">Bn</a></li>
                <li><a className="dropdown-item" href="#">Es</a></li>
                <li><a className="dropdown-item" href="#">De</a></li>
              </ul>
            </div>
            <a href="#contact" className="btn btn-dark rounded-pill px-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

