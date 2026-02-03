import { useState, useEffect } from 'react';
import './App.css';

// Logo Component
const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="6" fill="currentColor"/>
    <line x1="50" y1="50" x2="50" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="71" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="71" y2="71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="50" y2="80" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="29" y2="71" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="50" y1="50" x2="29" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      title: "Skincare Brand",
      challenge: "Struggling to scale past $50k/month without CAC spiraling",
      solution: "Rebuilt creative testing framework, implemented segmented lookalike audiences, shifted 60% of budget to top-performing UGC ads",
      results: [
        "Revenue: $47k → $240k/month (6 months)",
        "ROAS: 1.8 → 4.2",
        "CAC: Reduced by 38%"
      ],
      attribution: "Founder, 7-Figure Skincare Brand"
    },
    {
      title: "Fitness Apparel",
      challenge: "High traffic, low conversion rate, inconsistent ROAS",
      solution: "Overhauled landing page strategy, launched retargeting sequences, introduced tiered creative testing",
      results: [
        "Revenue: $80k → $340k/month (5 months)",
        "Conversion Rate: 1.2% → 3.8%",
        "Ad Spend Efficiency: +67%"
      ],
      attribution: "CEO, DTC Fitness Brand"
    },
    {
      title: "Supplement Company",
      challenge: "Saturated market, needed to differentiate and scale profitably",
      solution: "Developed angle-specific ad sets, A/B tested 40+ creatives, optimized for LTV over short-term ROAS",
      results: [
        "Revenue: $120k → $580k/month (7 months)",
        "LTV:CAC Ratio: 2.1 → 5.4",
        "Scaled ad spend 4.2x while maintaining profitability"
      ],
      attribution: "Founder, 8-Figure Supplement Co."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit & Strategy",
      description: "We analyze your current ad accounts, creative assets, and funnel performance to identify what's working and what's bleeding money. You get a detailed roadmap with prioritized optimizations.",
      timeline: "Week 1"
    },
    {
      number: "02",
      title: "Rebuild & Test",
      description: "We restructure campaigns, launch new creative tests, and implement proven audience segmentation strategies. Every decision is backed by data, not guesswork.",
      timeline: "Weeks 2-4"
    },
    {
      number: "03",
      title: "Scale & Optimize",
      description: "Once we've identified winning combinations, we aggressively scale while maintaining profitability. Weekly reporting keeps you in the loop on performance and next steps.",
      timeline: "Ongoing"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <Logo />
            <span>LUMINARY</span>
          </div>
          <a href="https://calendly.com/luminaryllc" target="_blank" rel="noopener noreferrer">
            <button className="nav-cta">Book a Call</button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Growth Partners</div>
          <h1 className="hero-title">
            We Scale DTC Brands to 7-Figures Through Profitable Paid Acquisition
          </h1>
          <p className="hero-subtitle">
            Most brands waste 40% of their ad spend on broken targeting and stale creative. We fix that—then scale what works.
          </p>
          <p className="hero-description">
            Luminary specializes in Facebook, Instagram, and Google Ads for direct-to-consumer brands ready to grow. We've helped 12+ brands profitably scale past $1M in annual revenue using data-driven creative strategy and audience optimization.
          </p>
          <a href="https://calendly.com/luminaryllc" target="_blank" rel="noopener noreferrer">
            <button className="hero-cta">
              Book a Free Strategy Call
              <span className="arrow">→</span>
            </button>
          </a>
          <p className="hero-note">Currently accepting 2 new clients for Q1 2026</p>
        </div>
        
        {/* Decorative elements */}
        <div className="hero-decoration">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies">
        <div className="section-header">
          <span className="section-label">Proof of Work</span>
          <h2 className="section-title">Recent Client Wins</h2>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="case-study-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="case-study-title">{study.title}</h3>
              
              <div className="case-study-section">
                <h4>Challenge</h4>
                <p>{study.challenge}</p>
              </div>
              
              <div className="case-study-section">
                <h4>Solution</h4>
                <p>{study.solution}</p>
              </div>
              
              <div className="case-study-section">
                <h4>Results</h4>
                <ul className="results-list">
                  {study.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <p className="case-study-attribution">— {study.attribution}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="section-header">
          <span className="section-label">Our Methodology</span>
          <h2 className="section-title">How It Works</h2>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-header">
                  <h3>{step.title}</h3>
                  <span className="step-timeline">{step.timeline}</span>
                </div>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="cta-content">
          <span className="cta-label">Let's Talk</span>
          <h2 className="cta-title">Ready to Scale?</h2>
          <p className="cta-description">
            We're currently working with a select group of DTC brands generating $30k-500k/month in revenue. If you're ready to profitably scale your paid acquisition, let's talk.
          </p>
          <a href="https://calendly.com/luminaryllc" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">
              Schedule Your Free Strategy Call
              <span className="arrow">→</span>
            </button>
          </a>
          <p className="cta-note">
            No pitch. Just 20 minutes to discuss your current ad performance and where you want to be in 90 days.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Logo />
            <span>LUMINARY</span>
          </div>
          <div className="footer-links">
            <a href="mailto:luminaryllc@protonmail.com">luminaryllc@protonmail.com</a>
            <a href="https://www.linkedin.com/in/dimitri-schiau-0848082ba" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Luminary Growth Partners</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
