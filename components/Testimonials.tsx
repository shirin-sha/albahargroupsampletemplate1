'use client';


const testimonials = [
  {
    quote: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Cras justo odio dapibus facilisis sociis natoque penatibus.",
    name: "Coriss Ambady",
    role: "Financial Analyst"
  },
  {
    quote: "Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    name: "Cory Zamora",
    role: "Marketing Specialist"
  },
  {
    quote: "Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum. Donec sed odio dui consectetur adipiscing elit.",
    name: "Nikolas Brooten",
    role: "Sales Manager"
  },
  {
    quote: "Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero condimentum ac laoreet vitae.",
    name: "Coriss Ambady",
    role: "Financial Analyst"
  },
  {
    quote: "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    name: "Laura Widerski",
    role: "Sales Specialist"
  },
  {
    quote: "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus magnis dis montes, nascetur ridiculus mus. Donec sed odio dui. Nulla vitae elit libero a pharetra.",
    name: "Jackie Sanders",
    role: "Investment Planner"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <p 
              className="text-uppercase mb-3" 
              style={{ fontSize: '0.875rem', letterSpacing: '1px', fontWeight: '500', color: '#6c757d' }}
            >
              HAPPY CUSTOMERS
            </p>
            <h2 className="mb-0" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#343F52', lineHeight: '1.3' }}>
              Don't take our word for it. See what{' '}
              <span className="text-decoration-underline" style={{ textDecorationColor: '#ff6b35', textDecorationThickness: '3px', textUnderlineOffset: '8px' }}>
                customers
              </span>{' '}
              are saying about us.
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card card border-0 shadow-sm text-start p-4" style={{ borderRadius: '12px', minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  {/* Stars Rating */}
                  <div className="stars-rating mb-3 d-flex justify-content-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#ffc107"
                        style={{ color: '#ffc107' }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote with Decorative Quotation Marks */}
                  <div className="quote-wrapper position-relative mb-4" style={{ flex: '1', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: '1rem 0' }}>
                    {/* Large decorative quotation marks */}
                    <div 
                      className="quote-marks position-absolute"
                      style={{
                        fontSize: '140px',
                        color: '#e9ecef',
                        fontWeight: '300',
                        lineHeight: '1',
                        zIndex: 0,
                        fontFamily: 'Georgia, serif',
                        top: '-20px',
                        left: '0',
                        opacity: 0.5
                      }}
                    >
                      "
                    </div>
                    <p 
                      className="quote-text position-relative mb-0"
                      style={{
                        fontSize: '1.125rem',
                        color: '#343F52',
                        lineHeight: '1.7',
                        zIndex: 1,
                        fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif',
                        padding: '0 1rem',
                        textAlign: 'left'
                      }}
                    >
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author Information */}
                  <div className="author-info d-flex align-items-center justify-content-start gap-3">
                    {/* Profile Picture Placeholder */}
                    <div 
                      className="profile-picture"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#f8f9fa',
                        border: '2px solid #e9ecef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <span className="text-muted" style={{ fontSize: '0.75rem' }}>Photo</span>
                    </div>
                    
                    {/* Name and Title */}
                    <div className="author-details text-start">
                      <h5 className="mb-1" style={{ fontSize: '1rem', fontWeight: '700', color: '#343F52', margin: 0 }}>
                        {testimonial.name}
                      </h5>
                      <p className="mb-0" style={{ fontSize: '0.875rem', color: '#6c757d', margin: 0 }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

