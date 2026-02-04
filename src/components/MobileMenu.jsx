import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
    const links = [
        { href: "#services", label: "Services" },
        { href: "#process", label: "Process" },
        { href: "#case-studies", label: "Case Studies" },
        { href: "#testimonials", label: "Reviews" },
        { href: "#faq", label: "FAQ" }
    ];

    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mobile-menu"
                >
                    <div className="mobile-menu-header">
                        <span className="logo-text">LUMINARY</span>
                        <button onClick={onClose} className="menu-close-btn">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mobile-menu-links">
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        className="mobile-menu-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="https://calendly.com/luminaryllc" className="btn btn-primary full-width">
                            Schedule a call
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
