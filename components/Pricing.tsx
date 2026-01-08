'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const pricingPlans = [
  {
    name: 'Basic Plan',
    price: '$9',
    period: 'mo',
    features: [
      { label: '1', text: 'Project' },
      { label: '100K', text: 'API Access' },
      { label: '100MB', text: 'Storage' },
      { label: 'Weekly', text: 'Reports' },
      { label: '7/24', text: 'Support' }
    ]
  },
  {
    name: 'Premium Plan',
    price: '$19',
    period: 'mo',
    features: [
      { label: '5', text: 'Projects' },
      { label: '100K', text: 'API Access' },
      { label: '200MB', text: 'Storage' },
      { label: 'Weekly', text: 'Reports' },
      { label: '7/24', text: 'Support' }
    ]
  },
  {
    name: 'Corporate Plan',
    price: '$49',
    period: 'mo',
    features: [
      { label: '20', text: 'Projects' },
      { label: '300K', text: 'API Access' },
      { label: '500MB', text: 'Storage' },
      { label: 'Weekly', text: 'Reports' },
      { label: '7/24', text: 'Support' }
    ]
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
            <h2 
              className="mb-3"
              data-aos="fade-up"
              style={{ fontSize: '2.5rem', fontWeight: '700', color: '#343F52' }}
            >
              Our Pricing
            </h2>
            <p 
              className="text-muted"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: '1.125rem', color: '#6c757d' }}
            >
              We offer great prices, premium products and quality service for your business.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="pricing-card card border-0 shadow-sm h-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                style={{ 
                  borderRadius: '12px', 
                  padding: '2.5rem 2rem',
                  backgroundColor: '#fff'
                }}
              >
                {/* Price */}
                <div className="price mb-3 text-center">
                  <span 
                    style={{ 
                      fontSize: '3.5rem', 
                      fontWeight: '700', 
                      color: '#343F52',
                      lineHeight: '1'
                    }}
                  >
                    {plan.price}
                  </span>
                  <span 
                    style={{ 
                      fontSize: '1.25rem', 
                      color: '#6c757d',
                      marginLeft: '4px'
                    }}
                  >
                    /{plan.period}
                  </span>
                </div>

                {/* Plan Name */}
                <h4 
                  className="text-center mb-4"
                  style={{ fontSize: '1.5rem', fontWeight: '700', color: '#343F52' }}
                >
                  {plan.name}
                </h4>

                {/* Features List */}
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, idx) => (
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
                        <strong style={{ color: '#343F52' }}>{feature.label}</strong>{' '}
                        {feature.text === 'Reports' ? (
                          <strong style={{ color: '#343F52' }}>{feature.text}</strong>
                        ) : (
                          feature.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button 
                  className="btn w-100 mt-auto"
                  style={{
                    backgroundColor: '#343F52',
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    borderRadius: '6px',
                    border: 'none'
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

