'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const faqs = [
  {
    question: 'Can I cancel my subscription?',
    answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.'
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.'
  },
  {
    question: 'How can I manage my Account?',
    answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.'
  },
  {
    question: 'Is my credit card information secure?',
    answer: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod maecenas.'
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
            <h2 
              className="mb-3"
              data-aos="fade-up"
              style={{ fontSize: '0.875rem', fontWeight: '400', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p 
              className="mb-0"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontSize: '1.75rem', fontWeight: '700', lineHeight: '1.4' }}
            >
              If you can't find what you're looking for, please contact our support team.
            </p>
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

