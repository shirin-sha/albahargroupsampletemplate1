'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import { FiTarget, FiBarChart, FiCheckCircle } from 'react-icons/fi';

const processSteps = [
  {
    number: '01',
    title: 'Collect Ideas',
    description: 'Duis mollis commodo luctus cursus commodo tortor mauris.',
    icon: <FiTarget size={32} />,
    details: {
      content: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.',
      bullets: [
        'Aenean eu leo quam. Pellentesque ornare.',
        'Nullam quis risus eget urna mollis ornare.',
        'Donec id elit non mi porta gravida at eget.'
      ]
    }
  },
  {
    number: '02',
    title: 'Data Analysis',
    description: 'Vivamus sagittis lacus augue fusce dapibus tellus nibh.',
    icon: <FiBarChart size={32} />,
    details: {
      content: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.',
      bullets: [
        'Aenean eu leo quam. Pellentesque ornare.',
        'Nullam quis risus eget urna mollis ornare.',
        'Donec id elit non mi porta gravida at eget.'
      ]
    }
  },
  {
    number: '03',
    title: 'Finalize Product',
    description: 'Vestibulum ligula porta felis maecenas faucibus mollis.',
    icon: <FiCheckCircle size={32} />,
    details: {
      content: 'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.',
      bullets: [
        'Aenean eu leo quam. Pellentesque ornare.',
        'Nullam quis risus eget urna mollis ornare.',
        'Donec id elit non mi porta gravida at eget.'
      ]
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
              style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', color: '#6c757d' }}
            >
              WHY CHOOSE SANDBOX?
            </p>
            <h2 
              className="mb-0"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: '2.5rem', fontWeight: '700', color: '#343F52', lineHeight: '1.3' }}
            >
              Here are a few{' '}
              <span className="text-decoration-underline" style={{ textDecorationColor: '#ff6b35', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
                reasons
              </span>{' '}
              why our customers choose Sandbox.
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
                        color: '#343F52',
                        lineHeight: '1',
                        fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif'
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h4 
                        className="mb-2"
                        style={{ fontSize: '1.25rem', fontWeight: '700', color: '#343F52' }}
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
                    className="process-image-wrapper h-100"
                    style={{
                      minHeight: '400px',
                      backgroundColor: '#f8f9fa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {/* Image Placeholder */}
                    <div className="text-center text-muted p-4">
                      <p className="mb-0">Image placeholder</p>
                      <small>Image will be added here</small>
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="col-md-6">
                  <div className="p-4 p-md-5 h-100 d-flex flex-column">
                    <h3 
                      className="mb-4"
                      style={{ fontSize: '2rem', fontWeight: '700', color: '#343F52' }}
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
                    <button 
                      className="btn mt-auto align-self-start"
                      style={{ 
                        backgroundColor: '#343F52',
                        color: 'white',
                        padding: '12px 28px',
                        fontSize: '0.95rem',
                        fontWeight: '600',
                        borderRadius: '6px',
                        border: 'none'
                      }}
                    >
                      Learn More
                    </button>
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

