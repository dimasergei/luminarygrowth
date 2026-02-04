import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import dimitriImg from '../assets/dimitri.jpg';

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

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        { name: "Dimitri Schiau", role: "Founder & Head of Growth", img: dimitriImg }
    ];

    return (
        <section className="team-page">
            <div className="container">
                <Reveal>
                    <div className="section-header center">
                        <span className="section-label">Team</span>
                        <h1 className="section-title">Meet the Founder</h1>
                    </div>
                </Reveal>

                <div className="team-split-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '4rem', alignItems: 'center', marginTop: '4rem' }}>
                    <Reveal>
                        <div className="team-card user-profile">
                            <div
                                className="team-avatar"
                                style={{
                                    backgroundImage: `url(${dimitriImg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '400px',
                                    marginBottom: '1.5rem'
                                }}
                            />
                            <h3>Dimitri Schiau</h3>
                            <span>Founder & Head of Growth</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="team-bio">
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Expertise tailored for scale.</h2>
                            <p style={{ fontSize: '1.1rem', color: '#949494', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                Dimitri is a performance marketing architect with a singular focus: <strong>profitable growth</strong>. With years of deep-dive experience in the E-commerce trenches, he doesn't just manage ad accounts—he engineers holistic growth systems.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#949494', lineHeight: '1.8' }}>
                                Having managed high-velocity spend for multiple brands scaling past the 7-figure mark, Dimitri understands the nuance between "scaling spend" and "scaling profit." His methodology combines rigorous data analysis with creative strategy, ensuring that every dollar spent contributes to the bottom line. When you work with Luminary, you aren't getting a junior account manager; you are getting the founder's direct competency and obsession with your success.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Team;
