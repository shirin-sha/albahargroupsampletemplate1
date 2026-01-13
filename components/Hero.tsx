'use client';

import { FiPlay } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="row g-0 align-items-stretch">
        {/* Left Side - Image with Play Button (50% of screen) */}
        <div className="col-12 col-lg-6">
          <div className="hero-image-wrapper position-relative w-100 h-100" style={{ minHeight: '400px', backgroundColor: '#f5f5f5' }}>
          
          
            {/* Add your image here - replace the src with your image path */}
            <img 
              src="/hero.jpg" 
              alt="Hero" 
              className="w-100 h-100"
              style={{ objectFit: 'cover' }}
            />
          
          </div>
        </div>

        {/* Right Side - Text Content (50% of screen) */}
        <div className="col-12 col-lg-6" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-content-wrapper d-flex flex-column justify-content-center h-100 py-4 py-lg-5 ps-4 ps-lg-5 ps-xl-6" style={{ minHeight: '400px' }}>
                  <h1 className="hero-headline mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '700', color: '#1c2539', lineHeight: '1.2', fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif' }}>
                    Connecting Global Brands with Kuwait's Everyday Life
                  </h1>
                  <p className="hero-subheading mb-4 mb-lg-5" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#6c757d', lineHeight: '1.6' }}>
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


