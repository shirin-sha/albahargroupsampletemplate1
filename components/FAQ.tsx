'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const faqs = [
  {
    question: 'Which business verticals does Al Bahar Group operate?',
    answer: 'We operate six verticals: Consumer Goods, Consumer Electronics, Home Automation, Enterprise Technology, Shipping, and Travel & Tourism, all supported by shared group capabilities.'
  },
  {
    question: 'How can a new brand explore partnership opportunities?',
    answer: 'You can reach our Business Development team through the Contact Us page. Share your brand details and we will connect you with the most relevant division.'
  },
  {
    question: 'Do you provide warehousing and logistics support in Kuwait?',
    answer: 'Yes. Our Warehouse & Logistics capability manages storage, inventory and distribution across Kuwait for the brands and businesses we represent.'
  },
  {
    question: 'Where can I find current career opportunities?',
    answer: 'All open roles across our businesses and central functions are listed in the Careers section. You can apply directly through the website or follow the instructions provided.'
  }
];

export default function FAQ() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="faq-section py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <p 
              className="mb-3"
              data-aos="fade-up"
              style={{ fontSize: '0.875rem', fontWeight: '500', color: '#6c757d', textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Frequently Asked Questions
            </p>
            <h2 
              className="mb-0"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1c2539', lineHeight: '1.3' }}
            >
              If you can't find what you need, please contact our team.
            </h2>
          </div>
        </div>

        {/* FAQ Items - Two Column Layout */}
        <div className="row g-4">
          {faqs.map((faq, index) => (
            <div key={index} className="col-md-6">
              <div 
                className="faq-item d-flex align-items-start gap-3"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Question Mark Icon */}
                <div 
                  className="faq-icon-wrapper flex-shrink-0"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#1c2539',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <span 
                    style={{ 
                      color: 'white', 
                      fontSize: '1.5rem', 
                      fontWeight: '700',
                      lineHeight: '1'
                    }}
                  >
                    ?
                  </span>
                </div>

                {/* Question and Answer */}
                <div className="faq-content flex-grow-1">
                  <h4 
                    className="mb-3"
                    style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '700', 
                      color: '#1c2539',
                      lineHeight: '1.3'
                    }}
                  >
                    {faq.question}
                  </h4>
                  <p 
                    className="mb-0"
                    style={{ 
                      fontSize: '0.95rem', 
                      color: '#6c757d', 
                      lineHeight: '1.7'
                    }}
                  >
                    {faq.answer}
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

