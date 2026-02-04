import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const Logo = () => (
    <div className="logo-wrapper">
        <span className="logo-text">LUMINARY</span>
    </div>
);

const Layout = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Simplified navigation for sub-pages
    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) return; // Only scroll on home
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const NavLink = ({ to, sectionId, children }) => {
        if (isHome) {
            return <a href={`#${sectionId}`} onClick={(e) => { e.preventDefault(); scrollToSection(sectionId); }}>{children}</a>;
        }
        return <Link to={`/#${sectionId}`}>{children}</Link>;
    };

    return (
        <div className="app-layout">
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

            <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <Link to="/" className="nav-logo-link"><Logo /></Link>
                    <div className="nav-links">
                        <NavLink to="/" sectionId="services">Services</NavLink>
                        <NavLink to="/" sectionId="process">Process</NavLink>
                        <NavLink to="/" sectionId="case-studies">Results</NavLink>
                        <NavLink to="/" sectionId="testimonials">Reviews</NavLink>
                        <Link to="/team">Team</Link>
                        <NavLink to="/" sectionId="faq">FAQ</NavLink>
                    </div>
                    <div className="nav-actions">
                        {isHome ? (
                            <a href="#booking" className="nav-cta" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Schedule Call</a>
                        ) : (
                            <Link to="/#booking" className="nav-cta">Schedule Call</Link>
                        )}
                        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <Logo />
                            <p>Profit-driven growth for ambitious E-commerce brands.</p>
                        </div>
                        <div className="footer-links">
                            <Link to="/#services">Services</Link>
                            <Link to="/#process">Process</Link>
                            <Link to="/#case-studies">Results</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/fulfillment">Fulfillment Policy</Link>
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
};

export default Layout;
