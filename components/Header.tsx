'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top border-bottom">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="navbar-brand position-relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={240}
            height={46}
            className="d-inline-block align-top"
            priority
          />
          {/* Image Size Indicator */}
          <div className="position-absolute" style={{ bottom: '-20px', left: '0', backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: '600', whiteSpace: 'nowrap', zIndex: 10 }}>
            250×46px
          </div>
        </Link>

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
            <li className="nav-item">
              <Link className="nav-link" href="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">ABOUT US</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                BUSINESSES
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/businesses/consumer-goods">CONSUMER GOODS</a></li>
                <li><a className="dropdown-item" href="/businesses/consumer-electronics">CONSUMER ELECTRONICS</a></li>
                <li><a className="dropdown-item" href="/businesses/home-automation">HOME AUTOMATION</a></li>
                <li><a className="dropdown-item" href="/businesses/enterprise-technology">ENTERPRISE TECHNOLOGY</a></li>
                <li><a className="dropdown-item" href="/businesses/shipping">SHIPPING</a></li>
                <li><a className="dropdown-item" href="/businesses/travel-tourism">TRAVEL & TOURISM</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                CAPABILITIES
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/capabilities/human-capital">HUMAN CAPITAL</a></li>
                <li><a className="dropdown-item" href="/capabilities/knowledge-capital">KNOWLEDGE CAPITAL</a></li>
                <li><a className="dropdown-item" href="/capabilities/business-excellence">BUSINESS EXCELLENCE</a></li>
                <li><a className="dropdown-item" href="/capabilities/warehouse-logistics">WAREHOUSE & LOGISTICS</a></li>
                <li><a className="dropdown-item" href="/capabilities/customer-care">CUSTOMER CARE</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                CORPORATE INFO
                <FiChevronDown className="ms-1" size={14} />
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/corporate-info/news-updates">NEWS & UPDATES</a></li>
                <li><a className="dropdown-item" href="/corporate-info/careers">CAREERS</a></li>
                <li><a className="dropdown-item" href="/corporate-info/partnerships">OUR PARTNERSHIPS</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">CONTACT US</Link>
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
            <a href="/contact-us" className="btn btn-dark rounded-pill px-4">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

