'use client';

import { FiPlay } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="row g-0 align-items-stretch">
        {/* Left Side - Image with Play Button (50% of screen) */}
        <div className="col-lg-6" style={{ width: '50%' }}>
          <div className="hero-image-wrapper position-relative w-100 h-100" style={{ minHeight: '600px', backgroundColor: '#f5f5f5' }}>
            {/* Image Size Indicator */}
            <div className="position-absolute top-0 start-0 p-3" style={{ backgroundColor: 'rgba(28, 37, 57, 0.9)', color: 'white', borderRadius: '0 0 8px 0', zIndex: 10, fontSize: '0.875rem', fontWeight: '600' }}>
              Image Size: 960px × 600px (Desktop)<br/>
              <small style={{ fontSize: '0.75rem', opacity: 0.9 }}>50% width × 600px height</small>
            </div>
            {/* Add your image here - replace the src with your image path */}
            <img 
              src="/path-to-your-image.jpg" 
              alt="Hero" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
            
            {/* Play Button Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle">
              <button 
                className="btn btn-play rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: 'rgba(28, 37, 57, 0.8)',
                  border: 'none',
                  color: 'white'
                }}
              >
                <FiPlay size={32} style={{ marginLeft: '4px' }} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content (50% of screen) */}
        <div className="col-lg-6" style={{ width: '50%', backgroundColor: '#f8f9fa' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-content-wrapper d-flex flex-column justify-content-center h-100 py-5 ps-5 ps-lg-6" style={{ minHeight: '600px' }}>
                  <h1 className="hero-headline mb-4" style={{ fontSize: '3rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.2' }}>
                    Connecting Global Brands with Kuwait's Everyday Life
                  </h1>
                  <p className="hero-subheading mb-5" style={{ fontSize: '1.25rem', color: '#6c757d', lineHeight: '1.6' }}>
                    We represent leading international brands delivering reliable solutions that serve people, businesses and communities across Kuwait.
                  </p>
                  <button 
                    className="btn btn-hero-cta align-self-start"
                    style={{
                      backgroundColor: '#1c2539',
                      color: 'white',
                      padding: '14px 32px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none'
                    }}
                  >
                    Explore Our Businesses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


