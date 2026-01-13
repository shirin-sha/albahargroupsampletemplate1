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
        <div className="col-12 col-lg-6">
          <div 
            className="solutions-image-wrapper position-relative w-100 h-100"
            style={{ minHeight: '400px', backgroundColor: '#f5f5f5' }}
          >
        
            {/* Add your image here - replace the src with your image path */}
            <img 
              src="/solutions.jpg" 
              alt="Solutions" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Side - Content (50% of screen) */}
        <div className="col-12 col-lg-6" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-10 col-xl-8">
                <div 
                  className="solutions-content-wrapper d-flex flex-column justify-content-center h-100 py-4 py-lg-5 ps-4 ps-lg-5 ps-xl-6"
                  style={{ minHeight: '400px' }}
                >
                  {/* Subheading */}
                  <p 
                    className="text-uppercase mb-3"
                    data-aos="fade-up"
                    style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '700', color: '#6c757d', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
                  >
                    Our Footprint
                  </p>

                  {/* Main Heading */}
                  <h2 
                    className="mb-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: '700', color: '#1c2539', lineHeight: '1.25', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}
                  >
                    Strong foundations that support every Al Bahar business
                  </h2>

                  {/* Paragraph */}
                  <p 
                    className="text-muted mb-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    style={{ fontSize: '1rem', color: '#6c757d', lineHeight: '1.7' }}
                  >
                    For more than eight decades, Mohamed Abdulrahman Al-Bahar Group has grown alongside Kuwait's development. Today, our integrated portfolio of businesses and shared group capabilities enables us to serve consumers, enterprises and travellers with reliability, consistency and care.
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
                          style={{ fontSize: '2rem', fontWeight: '600', color: '#1c2539', lineHeight: '1' }}
                        >
                          85+ Years
                        </h3>
                        <p 
                          className="mb-0"
                          style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1c2539', lineHeight: '1.5' }}
                        >
                          Serving partners, customers and communities in Kuwait.
                        </p>
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
                          style={{ fontSize: '2rem', fontWeight: '600', color: '#1c2539', lineHeight: '1' }}
                        >
                          6 Divisions
                        </h3>
                        <p 
                          className="mb-0"
                          style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1c2539', lineHeight: '1.5' }}
                        >
                      Quality solutions across 6 business verticals.
                        </p>
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

