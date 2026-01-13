'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const serviceCards = [
  {
    title: 'Global Brand Partners',
    bullets: [
      'Market entry and expansion in Kuwait',
      'Route-to-market and channel strategy',
      'Brand building and in-store execution',
      'Transparent performance reviews and reporting',
      'Long-term, partnership-driven approach'
    ],
    buttonText: 'Partner With Us'
  },
  {
    title: 'Retailers & Corporate Customers',
    bullets: [
      'Reliable product availability across channels',
      'Dedicated account management teams',
      'Technical and after-sales support where needed',
      'Efficient local warehousing and delivery',
      'Flexible solutions tailored to business needs'
    ],
    buttonText: 'Explore Our Solutions'
  },
  {
    title: 'Communities & Talent',
    bullets: [
      'Career opportunities across six business verticals',
      'Training, development and leadership programs',
      'Safe, inclusive and values-driven workplaces',
      'Community and social responsibility initiatives',
      'Focus on sustainable, long-term progress'
    ],
    buttonText: 'Discover Opportunities'
  }
];

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="pricing-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <p 
              className="mb-3"
              data-aos="fade-up"
              style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Who We Serve
            </p>
            <h2 
              className="mb-0"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}
            >
              Creating value for brands, customers and communities
            </h2>
          </div>
        </div>

        {/* Service Cards */}
        <div className="row g-4 justify-content-center">
          {serviceCards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="pricing-card card border-0 shadow-sm h-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ 
                  borderRadius: '12px', 
                  padding: '2.5rem 2rem',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Card Title */}
                <h4 
                  className="mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1c2539' }}
                >
                  {card.title}
                </h4>

                {/* Bullets List */}
                <ul className="list-unstyled mb-4 flex-grow-1">
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      {/* Checkmark Icon */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="me-3 mt-1 flex-shrink-0"
                        style={{ color: '#6c757d' }}
                      >
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                        <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                      <span style={{ fontSize: '0.95rem', color: '#6c757d', lineHeight: '1.6' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button 
                  className="btn w-100 mt-auto"
                  style={{
                    backgroundColor: '#1c2539',
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: 'none'
                  }}
                >
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

