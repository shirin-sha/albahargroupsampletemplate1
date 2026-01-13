import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '📈',
      title: 'Marketing Automation',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Campaign Management', 'Email Marketing', 'Lead Nurturing']
    },
    {
      id: 2,
      icon: '📅',
      title: 'Project Management',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Task Tracking', 'Team Collaboration', 'Timeline Planning']
    },
    {
      id: 3,
      icon: '📊',
      title: 'Web Analytics',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Data Insights', 'Performance Metrics', 'Custom Reports']
    },
    {
      id: 4,
      icon: '🔍',
      title: 'SEO Services',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building']
    },
    {
      id: 5,
      icon: '📋',
      title: 'Market Research',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Consumer Insights', 'Competitive Analysis', 'Trend Analysis']
    },
    {
      id: 6,
      icon: '📱',
      title: 'Social Media Management',
      description: 'Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit.',
      features: ['Content Creation', 'Community Management', 'Engagement Analytics']
    }
  ];

  return (
    <section className="my-services-wrapper">
      <div className="container">
        <div className="row">
          {/* Left Side - Sticky Content */}
          <div className="col-lg-5">
            <div className="sticky-left-content">
              <p 
                className="text-uppercase mb-3"
                style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', color: '#6c757d' }}
              >
                WHAT WE DO?
              </p>
              <h2 className="services-main-heading mb-4" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}>
                The service we offer is{' '}
                <span className="text-decoration-underline" style={{ textDecorationColor: '#ff6b35', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
                  specifically
                </span>{' '}
                designed to meet your needs.
              </h2>
              <p className="services-description mb-4" style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.7' }}>
                Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
              </p>
              <div className="services-cta">
                <a href="#contact" className="btn btn-dark" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: '600', borderRadius: '6px' }}>
                  More Details
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Scrollable Cards */}
          <div className="col-lg-7">
            <div className="scrollable-cards-area">
              {services.map((service) => (
                <div key={service.id} className="single-service-card">
                  <div className="service-card-inner">
                    <div className="service-header">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                      <div className="service-content">
                        <h4 className="service-title">
                          {service.title}
                        </h4>
                        <p className="service-text">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="service-features">
                      {service.features.map((feature, index) => (
                        <span key={index} className="feature-badge">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;