import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

const BookingSection = () => {
    return (
        <section id="booking" className="booking-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="booking-wrapper"
                >
                    <div className="booking-header">
                        <h2>Ready to scale?</h2>
                        <p>Select a time below that works for you.</p>
                    </div>
                    <div className="calendly-container">
                        <InlineWidget
                            url="https://calendly.com/dimasrgh/consultation"
                            styles={{
                                height: '700px',
                                width: '100%'
                            }}
                            pageSettings={{
                                backgroundColor: '0A0A0A',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: '998CFF',
                                textColor: 'EFF2F1'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
