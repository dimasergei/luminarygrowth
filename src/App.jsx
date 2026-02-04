import { useState, useEffect } from 'react';
import './App.css';

const Logo = () => (
  <div className="logo-wrapper">
    <span className="logo-text">LUMINARY</span>
  </div>
);

const SectionLabel = ({ text }) => (
  <span className="section-label">{text}</span>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      brand: "Skincare Co.",
      stats: "$30k/mo → $355k/mo",
      label: "Revenue Growth",
      period: "6 Months"
    },
    {
      brand: "Fitness Gear",
      stats: "1.2% → 4.1%",
      label: "Conversion Rate",
      period: "5 Months"
    },
    {
      brand: "Daily Greens",
      stats: "$120k/mo → $580k/mo",
      label: "Revenue Growth",
      period: "8 Months"
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Audit & Strategy",
      desc: "We dive deep into your metrics to find the leaks and opportunities."
    },
    {
      num: "02",
      title: "Creative Rebuild",
      desc: "Our team designs high-converting UGC and static ads tailored to your brand."
    },
    {
      num: "03",
      title: "Scale Vertically",
      desc: "We scale what works while maintaining strict efficiency targets."
    }
  ];

  const faqs = [
    {
      q: "What brands do you work with?",
      a: "We exclusively work with E-commerce brands generating between $30k and $500k in monthly revenue."
    },
    {
      q: "Do you have a monthly retainer?",
      a: "Yes, we work on a performance + flat fee model to ensure our incentives are perfectly aligned."
    },
    {
      q: "How long does it take to see results?",
      a: "Typically, we see significant performance improvements within the first 30 days of implementation."
    }
  ];

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <Logo />
          <div className="nav-links">
            <a href="#process">Process</a>
            <a href="#case-studies">Case Studies</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faqs">FAQs</a>
          </div>
          <a href="https://calendly.com/luminaryllc" className="nav-cta">Schedule a call today!</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              We help E-commerce brands grow <i>profitably</i>.
            </h1>
            <div className="hero-actions">
              <a href="https://calendly.com/luminaryllc" className="btn btn-primary">Schedule a call today!</a>
              <a href="#case-studies" className="btn btn-secondary">View case studies</a>
            </div>
          </div>
          <div className="hero-partners">
            <p>Trusted by brands on</p>
            <div className="partner-logos">
              <span>Shopify</span>
              <span>Facebook</span>
              <span>Google</span>
              <span>Klaviyo</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="container">
          <SectionLabel text="Process" />
          <h2 className="section-title">So, how do we scale your brand?</h2>
          <div className="process-list">
            {processSteps.map((step, i) => (
              <div key={i} className="process-item">
                <span className="process-num">{step.num}</span>
                <div className="process-text">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="case-studies">
        <div className="container">
          <SectionLabel text="Case Studies" />
          <h2 className="section-title">Proven results for our partners.</h2>
          <div className="case-studies-grid">
            {caseStudies.map((study, i) => (
              <div key={i} className="case-card">
                <span className="case-brand">{study.brand}</span>
                <div className="case-main">
                  <span className="case-stats">{study.stats}</span>
                  <span className="case-label">{study.label}</span>
                </div>
                <span className="case-period">{study.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <SectionLabel text="Reviews" />
          <h2 className="section-title">Hear what our <i>partners</i> have to say.</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Luminary completely transformed our ad strategy. We went from breaking even to our most profitable month ever in just 90 days."</p>
              <span className="testimonial-author">Founder, Glow Skincare</span>
            </div>
            <div className="testimonial-card">
              <p>"The creative output alone is worth the investment. Their team understands DTC like no other agency we've worked with."</p>
              <span className="testimonial-author">CEO, Peak Athletics</span>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="faqs">
        <div className="container">
          <SectionLabel text="FAQs" />
          <h2 className="section-title">Frequent Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to <i>scale your brand</i>?</h2>
          <p className="cta-desc">Schedule a free audit to see how we can help you hit your next milestone.</p>
          <a href="https://calendly.com/luminaryllc" className="btn btn-primary large">Schedule a call today!</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <Logo />
            <div className="footer-links">
              <a href="#process">Process</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#testimonials">Reviews</a>
              <a href="mailto:luminaryllc@protonmail.com">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Luminary Growth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

