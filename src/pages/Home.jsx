import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight, CheckCircle2, TrendingUp, Users, Activity, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import BookingSection from '../components/BookingSection';
import '../App.css';

import glowImg from '../assets/glow.png';
import peakImg from '../assets/peak.jpeg';
import shopImg from '../assets/shop.png';
import shop2Img from '../assets/shop2.png';
import shop3Img from '../assets/shop3.png';
import shop4Img from '../assets/shop 4.png';

const SectionLabel = ({ text }) => (
    <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="section-label"
    >
        {text}
    </motion.span>
);

const Reveal = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-10%" }}
    >
        {children}
    </motion.div>
);

const Home = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [currentShopIndex, setCurrentShopIndex] = useState(0);

    // Gallery images groups
    const shopImages = [shopImg, shop2Img, shop3Img, shop4Img];

    const nextShopImage = () => {
        setCurrentShopIndex((prev) => (prev + 1) % shopImages.length);
    };

    const prevShopImage = () => {
        setCurrentShopIndex((prev) => (prev - 1 + shopImages.length) % shopImages.length);
    };

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const scrollToBooking = (e) => {
        e?.preventDefault();
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };

    const services = [
        {
            title: "Paid Acquisition",
            desc: "We lower your customer acquisition costs with high-converting, viral performance ad creatives across Meta, Google, and TikTok.",
            icon: <TrendingUp size={24} />
        },
        {
            title: "Landing Pages",
            desc: "We create highly optimized landing pages that speak to your target customers at each stage of the funnel.",
            icon: <Activity size={24} />
        },
        {
            title: "Strategic Consulting",
            desc: "We advise you on all of your eCommerce business levers and help to actualise your goals with data-driven forecasting.",
            icon: <Users size={24} />
        }
    ];

    const processSteps = [
        {
            num: "01",
            title: "Audit & Strategy",
            desc: "We dive deep into your metrics to find the leaks and opportunities. We match your own insight with our data."
        },
        {
            num: "02",
            title: "Creative Rebuild",
            desc: "Our team designs high-converting UGC and static ads tailored to your brand, designed to perform well at scale."
        },
        {
            num: "03",
            title: "Scale Vertically",
            desc: "We scale what works while maintaining strict efficiency targets, removing bottlenecks ensuring sustainable growth."
        }
    ];

    const successStories = [
        {
            title: "$30k/mo → $355k/mo in 12 months",
            desc: "This brand was stuck at $30k/mo, struggling to scale Facebook ads without hurting profitability. We implemented a consolidated media buying strategy and introduced Google Ads.",
            stat: "7.5x ROAS",
            tags: ["Scale", "Strategy"]
        },
        {
            title: "$23k/mo → $500k/mo in 12 months",
            desc: "Struggling with high CAC ($200), this DTC brand needed a change. We lowered CAC to $20 in just 30 days by overhauling creatives and landing pages.",
            stat: "$19 CAC",
            tags: ["Creative", "Turnaround"]
        }
    ];

    const faqs = [
        {
            q: "What brands do you work with?",
            a: "We exclusively work with E-commerce brands generating between $30k and $500k in monthly revenue aimed at aggressive growth."
        },
        {
            q: "Do you have a monthly retainer?",
            a: "Yes, we work on a performance + flat fee model to ensure our incentives are perfectly aligned with your success."
        },
        {
            q: "How long does it take to see results?",
            a: "Typically, we see significant performance improvements within the first 30 days of implementation due to our rapid testing framework."
        }
    ];

    return (
        <>
            <section className="hero">
                <div className="container">
                    <Reveal>
                        <h1 className="hero-title">
                            We help E-commerce brands grow <i>profitably</i>.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="hero-subtitle">
                            You need a partner who can scale your revenue, not just your ad spend.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="hero-actions">
                            <button onClick={scrollToBooking} className="btn btn-primary">
                                Schedule a call <ArrowUpRight size={20} />
                            </button>
                            <a href="#case-studies" className="btn btn-secondary">View results</a>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="hero-partners">
                            <p>Trusted by brands on</p>
                            <div className="marquee-container">
                                <div className="marquee-content">
                                    <span>Shopify</span>
                                    <span>Facebook</span>
                                    <span>Google</span>
                                    <span>TikTok</span>
                                    <span>Klaviyo</span>
                                    <span>Shopify</span>
                                    <span>Facebook</span>
                                    <span>Google</span>
                                    <span>TikTok</span>
                                    <span>Klaviyo</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section id="services" className="services">
                <div className="container">
                    <SectionLabel text="What we offer" />
                    <div className="services-grid">
                        <Reveal>
                            <div className="service-intro">
                                <h2>Why Luminary?</h2>
                                <p>You're not just hiring an agency; you're partnering with a team acting as an extension of your business.</p>
                            </div>
                        </Reveal>
                        {services.map((s, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="service-card">
                                    <div className="service-icon">{s.icon}</div>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" className="process">
                <div className="container">
                    <SectionLabel text="Process" />
                    <Reveal>
                        <h2 className="section-title">So, how do we scale your brand?</h2>
                    </Reveal>
                    <div className="process-list">
                        {processSteps.map((step, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="process-item">
                                    <span className="process-num">{step.num}</span>
                                    <div className="process-text">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="case-studies" className="detailed-stories">
                <div className="container">
                    <SectionLabel text="Case Studies" />
                    <Reveal>
                        <h2 className="section-title">Proven results.</h2>
                    </Reveal>
                    <div className="stories-grid">
                        {successStories.map((story, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="story-card">
                                    <div className="story-header">
                                        <div className="story-tags">
                                            {story.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                        </div>
                                        <span className="story-stat">{story.stat}</span>
                                    </div>
                                    <h3>{story.title}</h3>
                                    <p>{story.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="creatives-showcase">
                <div className="container">
                    <SectionLabel text="Gallery" />
                    <Reveal>
                        <h2 className="section-title">High-Performing Assets</h2>
                        <p className="section-desc">We build ads that stop the scroll. Here is a glimpse of our creative output.</p>
                    </Reveal>

                    {/* Featured Assets: Glow & Peak (Centered, Full Size, Uncropped) */}
                    <div className="featured-grid" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginBottom: '4rem',
                        flexWrap: 'wrap'
                    }}>
                        {[glowImg, peakImg].map((img, i) => (
                            <Reveal key={`featured-${i}`} delay={0.1}>
                                <motion.div
                                    className="featured-item"
                                    whileHover={{ scale: 1.02 }}
                                    style={{
                                        maxWidth: '500px', // Limit width but allow it to be large
                                        width: '100%',
                                        flex: '1 1 400px' // Allow wrapping on mobile
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt="Featured Asset"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            borderRadius: '16px',
                                            boxShadow: '0 20px 40px -10px rgba(153, 140, 255, 0.15)'
                                        }}
                                    />
                                </motion.div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Supporting Assets: Shop Images Carousel (Single Image, Uncropped) */}
                    <div className="shop-carousel" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem'
                    }}>
                        <button
                            onClick={prevShopImage}
                            className="carousel-btn"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                flexShrink: 0
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="carousel-frame" style={{
                            width: '100%',
                            minHeight: '400px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '1rem'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentShopIndex}
                                    src={shopImages[currentShopIndex]}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '600px', // Prevent massive vertical scrolling
                                        width: 'auto',
                                        height: 'auto',
                                        borderRadius: '12px',
                                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                                        display: 'block'
                                    }}
                                />
                            </AnimatePresence>
                        </div>

                        <button
                            onClick={nextShopImage}
                            className="carousel-btn"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                flexShrink: 0
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <div className="container">
                    <SectionLabel text="Reviews" />
                    <h2 className="section-title">Hear from our partners.</h2>
                    <div className="testimonials-grid">
                        <Reveal>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#998CFF" color="#998CFF" />)}
                                </div>
                                <p>"Luminary completely transformed our ad strategy. We went from breaking even to our most profitable month ever in just 90 days."</p>
                                <div className="testimonial-meta">
                                    <span className="author">Founder, Glow Skincare</span>
                                    <span className="verified"><CheckCircle2 size={14} /> Verified Partner</span>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="testimonial-card">
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#998CFF" color="#998CFF" />)}
                                </div>
                                <p>"The creative output alone is worth the investment. Their team understands DTC like no other agency we've worked with."</p>
                                <div className="testimonial-meta">
                                    <span className="author">CEO, Peak Athletics</span>
                                    <span className="verified"><CheckCircle2 size={14} /> Verified Partner</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section id="faq" className="faqs">
                <div className="container">
                    <SectionLabel text="FAQs" />
                    <h2 className="section-title">Frequent Questions</h2>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                    <div className="faq-question">
                                        <h3>{faq.q}</h3>
                                        <span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>
                                    </div>
                                    <AnimatePresence>
                                        {activeFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="faq-answer"
                                            >
                                                <p>{faq.a}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <Reveal>
                        <h2 className="cta-title">Ready to <i>scale beyond 7-8 figures</i>?</h2>
                        <div className="cta-qualification">
                            <h3>To qualify you must:</h3>
                            <p>Be generating $30k+/mo or have sufficient runway for aggressive growth.</p>
                        </div>
                        <p className="cta-desc">If that's you, we can help. Book your call below.</p>
                        <button onClick={scrollToBooking} className="btn btn-primary large">
                            Select time <ArrowUpRight size={24} />
                        </button>
                    </Reveal>
                </div>
            </section>

            <BookingSection />
        </>
    );
};

export default Home;
