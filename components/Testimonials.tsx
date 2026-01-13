'use client';

const capabilities = [
  {
    id: 1,
    title: 'Human Capital',
    text: 'We invest in developing our people through structured learning, leadership programs and clear career paths, creating strong teams across every division.'
  },
  {
    id: 2,
    title: 'Knowledge Capital',
    text: 'Market data, category insights and field feedback are collected and shared across the Group to support smarter, faster decisions.'
  },
  {
    id: 3,
    title: 'Business Excellence',
    text: 'Group-wide standards, performance dashboards and continuous improvement initiatives help us operate with discipline, transparency and consistent quality.'
  },
  {
    id: 4,
    title: 'Warehouse & Logistics',
    text: 'Centralised warehousing, inventory management and transport planning ensure products move efficiently from port and supplier to customer.'
  },
  {
    id: 5,
    title: 'Customer Care',
    text: 'Dedicated teams and clear service channels support retailers, corporate clients and travellers, resolving issues quickly and building trust.'
  },
  {
    id: 6,
    title: 'Integrated Group Support',
    text: 'These capabilities work together as one platform, allowing all six business verticals to focus on growth while relying on strong shared foundations.'
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
              Our Capabilities
            </p>
            <h2 className="mb-0" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}>
              Core capabilities that power every Al Bahar business
            </h2>
          </div>
        </div>
        <div className="row g-4">
          {capabilities.map((capability) => (
            <div key={capability.id} className="col-md-6 col-lg-4">
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card card border-0 shadow-sm text-start p-4" style={{ borderRadius: '12px', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <h4 className="mb-3" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1c2539', marginBottom: '1rem' }}>
                    {capability.title}
                  </h4>
                  <p 
                    className="mb-0"
                    style={{
                      fontSize: '1rem',
                      color: '#6c757d',
                      lineHeight: '1.7',
                      fontFamily: 'var(--font-manrope), "Manrope Fallback", sans-serif'
                    }}
                  >
                    {capability.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

