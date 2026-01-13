'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import { FiTarget, FiBarChart, FiCheckCircle } from 'react-icons/fi';

const processSteps = [
  {
    number: '01',
    title: 'Deep Market Understanding',
    description: 'We combine 85+ years in Kuwait with up-to-date category and shopper insights.',
    icon: <FiTarget size={32} />,
    image: '/process-1.jpg',
    details: {
      content: 'Grounded in Kuwaiti heritage, we understand how customers shop, travel and do business. Our teams track category trends, channel dynamics and competitor activity, helping partners position their brands for long-term relevance and growth.',
      bullets: [
        'Local insight across modern trade, traditional trade and specialist channels',
        'Category and shopper understanding informed by real on-ground experience',
        'Data and feedback loops that turn observations into actionable plans'
      ],
      showButton: false
    }
  },
  {
    number: '02',
    title: 'Integrated Operations & Capabilities',
    description: 'Shared logistics, excellence and customer care teams support every business vertical.',
    icon: <FiBarChart size={32} />,
    image: '/process-02.jpg',
    details: {
      content: 'Our businesses are supported by strong group capabilities—Business Excellence, Warehouse & Logistics, Human Capital, Knowledge Capital and Customer Care—ensuring consistent standards and reliable execution across all six verticals.',
      bullets: [
        'Centralised warehousing and efficient distribution across Kuwait',
        'Group standards, audits and performance dashboards',
        'Skilled people and training programs supporting sales and operations'
      ],
      showButton: true
    }
  },
  {
    number: '03',
    title: 'Long-Term Partnership Mindset',
    description: 'We focus on sustainable, win-win growth with brands, customers and communities.',
    icon: <FiCheckCircle size={32} />,
    image: '/process-1.jpg',
    details: {
      content: 'From the first agreement, we plan for the long term. We invest in brand building, joint business planning and transparent reporting, creating relationships that grow stronger year after year.',
      bullets: [
        'Decades-long relationships with leading international brands',
        'Joint planning and regular performance reviews with partners',
        'Shared focus on sustainable value for all stakeholders'
      ],
      showButton: true
    }
  }
];

export default function Process() {
  const [activeTab, setActiveTab] = useState(2); // Start with step 03 (index 2) as active

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  const activeStep = processSteps[activeTab];

  return (
    <section className="process-section py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <p 
              className="text-uppercase mb-3"
              data-aos="fade-up"
              style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '700', color: '#6c757d', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
            >
              WHY AL BAHAR?
            </p>
            <h2 
              className="mb-0"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', color: '#1c2539', lineHeight: '1.25', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
            >
              Here are a few reasons partners choose Al Bahar Group.
            </h2>
          </div>
        </div>

        {/* Process Steps Tabs */}
        <div className="row g-3 mb-5">
          {processSteps.map((step, index) => {
            const isActive = activeTab === index;
            return (
              <div key={index} className="col-md-4">
                <div
                  className={`process-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  style={{
                    cursor: 'pointer',
                    padding: isActive ? '1.5rem' : '1.5rem',
                    backgroundColor: isActive ? '#fff' : 'transparent',
                    borderRadius: isActive ? '12px' : '0',
                    boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                    border: isActive ? 'none' : 'none'
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="process-number"
                      style={{ 
                        fontSize: '3rem', 
                        fontWeight: '700', 
                        color: '#1c2539',
                        lineHeight: '1',
                        fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif'
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 
                        className="mb-2"
                        style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1c2539' }}
                      >
                        {step.title}
                      </h4>
                      <p 
                        className="text-muted mb-0"
                        style={{ fontSize: '0.95rem', color: '#6c757d', lineHeight: '1.6' }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Process Card - Shows only active step */}
        <div className="row">
          <div className="col-12">
            <div 
              className="card border-0 shadow-sm"
              data-aos="fade-up"
              key={activeTab}
              style={{ 
                borderRadius: '12px', 
                padding: '0', 
                backgroundColor: '#fff',
                overflow: 'hidden'
              }}
            >
              <div className="row g-0">
                {/* Left Column - Image */}
                <div className="col-md-6">
                  <div 
                    className="process-image-wrapper h-100 position-relative"
                    style={{
                      minHeight: '400px',
                      backgroundColor: '#f8f9fa',
                      overflow: 'hidden'
                    }}
                  >
                 
                    {/* Image */}
                    <img 
                      src={activeStep.image} 
                      alt={activeStep.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="col-md-6">
                  <div className="p-4 p-md-5 h-100 d-flex flex-column">
                    <h3 
                      className="mb-4"
                      style={{ fontSize: '2rem', fontWeight: '700', color: '#1c2539' }}
                    >
                      {activeStep.title}
                    </h3>
                    <p 
                      className="text-muted mb-4"
                      style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.7' }}
                    >
                      {activeStep.details.content}
                    </p>
                    <ul className="list-unstyled mb-4">
                      {activeStep.details.bullets.map((bullet, idx) => (
                        <li key={idx} className="mb-3 d-flex align-items-start">
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
                          <span style={{ fontSize: '0.95rem', color: '#6c757d', lineHeight: '1.6' }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

