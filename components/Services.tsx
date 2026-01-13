import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🛒',
      title: 'Consumer Goods',
      description: 'We represent leading FMCG and household brands, ensuring strong availability and visibility across Kuwait\'s key retail channels.',
      features: ['FMCG Distribution', 'Modern Trade', 'Traditional Trade']
    },
    {
      id: 2,
      icon: '📱',
      title: 'Consumer Electronics',
      description: 'Home and personal electronics from trusted global innovators, supported by knowledgeable sales teams and reliable after-sales service.',
      features: ['Home Appliances', 'Personal Devices', 'After-Sales Support']
    },
    {
      id: 3,
      icon: '🏠',
      title: 'Home Automation',
      description: 'Smart home solutions that enhance comfort, security and energy efficiency in modern Kuwaiti homes and developments.',
      features: ['Smart Living', 'Security Solutions', 'Energy Management']
    },
    {
      id: 4,
      icon: '💻',
      title: 'Enterprise Technology',
      description: 'Integrated IT, print, imaging and AV solutions that help organisations work smarter, protect information and improve productivity.',
      features: ['IT Solutions', 'Managed Print', 'AV Systems']
    },
    {
      id: 5,
      icon: '🚢',
      title: 'Shipping',
      description: 'Port agency and shipping services connecting Kuwait to major regional and global trade routes, with reliable coordination end-to-end.',
      features: ['Port Agency', 'Cargo Handling', 'Trade Lanes']
    },
    {
      id: 6,
      icon: '✈️',
      title: 'Travel & Tourism',
      description: 'Corporate, leisure and group travel services that combine global networks with personalised local support.',
      features: ['Corporate Travel', 'Leisure Trips', 'Group Tours']
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
                style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '700', color: '#6c757d', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
              >
                Our Businesses
              </p>
              <h2 className="services-main-heading mb-4" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', color: '#1c2539', lineHeight: '1.25', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}>
                The businesses we operate are shaped by Kuwait's needs.
              </h2>
              <p className="services-description mb-4" style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.7' }}>
                Al Bahar Group manages six specialised divisions that touch everyday life in Kuwait. From essential consumer products and electronics to technology, shipping and travel, each business focuses on delivering trusted solutions for customers and partners.
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