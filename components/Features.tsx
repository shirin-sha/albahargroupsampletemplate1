'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const features = [
  {
    title: 'Creativity',
    description: 'Curabitur blandit lacus magna ridiculus mus duis mollis.'
  },
  {
    title: 'Innovative Thinking',
    description: 'Curabitur blandit lacus magna ridiculus mus duis mollis.'
  },
  {
    title: 'Rapid Solutions',
    description: 'Curabitur blandit lacus magna ridiculus mus duis mollis.'
  },
  {
    title: 'Top-Notch Support',
    description: 'Curabitur blandit lacus magna ridiculus mus duis mollis.'
  }
];

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="features-section py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Images */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <div className="features-images-wrapper">
              {/* Top Large Image */}
              <div 
                className="mb-3 position-relative"
                data-aos="fade-right"
                style={{
                  width: '100%',
                  minHeight: '300px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {/* Image Size Indicator */}
                <div className="position-absolute top-0 start-0 p-2" style={{ backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', borderRadius: '0 0 8px 0', zIndex: 10, fontSize: '0.75rem', fontWeight: '600' }}>
                  Image: 540px × 300px
                </div>
                <div className="text-center text-muted p-4">
                  <p className="mb-0">Large Image</p>
                  <small>Image will be added here</small>
                </div>
              </div>

              {/* Bottom Two Smaller Images */}
              <div className="row g-3">
                <div className="col-6">
                  <div 
                    className="position-relative"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    style={{
                      width: '100%',
                      minHeight: '200px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Image Size Indicator */}
                    <div className="position-absolute top-0 start-0 p-2" style={{ backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', borderRadius: '0 0 8px 0', zIndex: 10, fontSize: '0.7rem', fontWeight: '600' }}>
                      Image: 255px × 200px
                    </div>
                    <div className="text-center text-muted p-3">
                      <p className="mb-0" style={{ fontSize: '0.875rem' }}>Small Image 1</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div 
                    className="position-relative"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    style={{
                      width: '100%',
                      minHeight: '200px',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Image Size Indicator */}
                    <div className="position-absolute top-0 start-0 p-2" style={{ backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', borderRadius: '0 0 8px 0', zIndex: 10, fontSize: '0.7rem', fontWeight: '600' }}>
                      Image: 255px × 200px
                    </div>
                    <div className="text-center text-muted p-3">
                      <p className="mb-0" style={{ fontSize: '0.875rem' }}>Small Image 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-12 col-lg-6">
            <div className="features-content-wrapper">
              {/* Subheading */}
              <p 
                className="text-uppercase text-muted mb-3"
                data-aos="fade-up"
                style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', color: '#6c757d' }}
              >
                WHAT MAKES US DIFFERENT?
              </p>

              {/* Main Heading */}
              <h2 
                className="mb-5"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}
              >
                We bring{' '}
                <span className="text-decoration-underline" style={{ textDecorationColor: '#ff6b35', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
                  solutions
                </span>{' '}
                to make life easier for our customers.
              </h2>

              {/* Feature List - 2x2 Grid */}
              <div className="features-list">
                <div className="row g-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="col-6"
                      data-aos="fade-up"
                      data-aos-delay={200 + (index * 100)}
                    >
                      <div className="feature-item">
                        <h4 
                          className="mb-2"
                          style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1c2539' }}
                        >
                          {feature.title}
                        </h4>
                        <p 
                          className="text-muted mb-0"
                          style={{ fontSize: '0.95rem', color: '#6c757d', lineHeight: '1.6' }}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

