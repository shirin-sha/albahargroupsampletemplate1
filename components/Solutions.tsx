'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function Solutions() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="solutions-section py-5" style={{ backgroundColor: '#fff' }}>
      <div className="row g-0 align-items-stretch">
        {/* Left Side - Image (50% of screen) */}
        <div className="col-lg-6" style={{ width: '50%' }}>
          <div 
            className="solutions-image-wrapper position-relative w-100 h-100"
            style={{ minHeight: '600px', backgroundColor: '#f5f5f5' }}
          >
            {/* Image Size Indicator */}
            <div className="position-absolute top-0 start-0 p-3" style={{ backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', borderRadius: '0 0 8px 0', zIndex: 10, fontSize: '0.875rem', fontWeight: '600' }}>
              Image Size: 960px × 600px (Desktop)<br/>
              <small style={{ fontSize: '0.75rem', opacity: 0.9 }}>50% width × 600px height</small>
            </div>
            {/* Add your image here - replace the src with your image path */}
            <img 
              src="/path-to-your-image.jpg" 
              alt="Solutions" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Side - Content (50% of screen) */}
        <div className="col-lg-6" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-10 col-xl-8">
                <div 
                  className="solutions-content-wrapper d-flex flex-column justify-content-center h-100 py-5 ps-5 ps-lg-6"
                  style={{ minHeight: '600px' }}
                >
                  {/* Subheading */}
                  <p 
                    className="text-uppercase text-muted mb-3"
                    data-aos="fade-up"
                    style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', color: '#6c757d' }}
                  >
                    OUR SOLUTIONS
                  </p>

                  {/* Main Heading */}
                  <h2 
                    className="mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}
                  >
                    We make your spending{' '}
                    <span className="text-decoration-underline" style={{ textDecorationColor: '#ff6b35', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
                      stress-free
                    </span>{' '}
                    for you to have the perfect control.
                  </h2>

                  {/* Paragraph */}
                  <p 
                    className="text-muted mb-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.7' }}
                  >
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus. 
                    Maecenas sed diam eget risus varius blandit sit amet non magna.
                  </p>

                  {/* Metrics */}
                  <div className="row g-4">
                    <div className="col-6">
                      <div 
                        className="metric-card text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        <h3 
                          className="mb-2"
                          style={{ fontSize: '3rem', fontWeight: '700', color: '#1c2539', lineHeight: '1' }}
                        >
                          99.7%
                        </h3>
                        <p 
                          className="mb-2"
                          style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1c2539' }}
                        >
                          Customer Satisfaction
                        </p>
                        {/* Stars */}
                        <div className="d-flex justify-content-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#ff6b35"
                              style={{ color: '#ff6b35' }}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div 
                        className="metric-card text-center"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        <h3 
                          className="mb-2"
                          style={{ fontSize: '3rem', fontWeight: '700', color: '#1c2539', lineHeight: '1' }}
                        >
                          4x
                        </h3>
                        <p 
                          className="mb-2"
                          style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1c2539' }}
                        >
                          New Visitors
                        </p>
                        {/* Stars */}
                        <div className="d-flex justify-content-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="#ff6b35"
                              style={{ color: '#ff6b35' }}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
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

