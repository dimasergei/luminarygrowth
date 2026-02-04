import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Fulfillment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="legal-page">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="legal-content"
                >
                    <h1>Fulfillment Policy</h1>
                    <p className="last-updated">Last Updated: February 2026</p>

                    <section>
                        <p>Welcome to Luminary Growth, where we are committed to providing exceptional service to our valued clients. Our fulfillment policy is designed to ensure clarity, transparency, and satisfaction throughout every transaction. Please take a moment to review the following guidelines regarding refunds, cancellations, and other important aspects of our service.</p>
                    </section>

                    <section>
                        <h2>Detailed Product Descriptions:</h2>
                        <p>We believe in empowering our clients with comprehensive information about our services. Each offering is accompanied by detailed descriptions to help you make informed decisions. For physical goods, we provide multiple images and detailed information about materials, colors, and other relevant details. This ensures that you have a clear understanding of what to expect from your purchase, minimizing the potential for disputes and ensuring your satisfaction.</p>
                    </section>

                    <section>
                        <h2>Display of Currency:</h2>
                        <p>To support our international clientele, all prices displayed on our website and through email are clearly associated with the respective currency. We ensure explicit representation of prices to avoid any confusion regarding currency conversions.</p>
                    </section>

                    <section>
                        <h2>Contact Methods:</h2>
                        <p>We value open communication with our clients. You can easily reach out to us through various channels, including direct communication channels such as email addresses, phone numbers, and Slack. Our goal is to provide low-friction communication avenues to address any inquiries or concerns promptly, thereby enhancing your overall experience with us.</p>
                    </section>

                    <section>
                        <h2>Order Fulfillment Policies:</h2>
                        <p>Our commitment to transparency extends to our order fulfillment policies. Please familiarize yourself with the following:</p>
                        <ul>
                            <li><strong>Refund Policy:</strong> Clients are eligible for refunds upon request after a minimum engagement period of three months.</li>
                            <li><strong>Cancellation Policy:</strong> Clients must provide a 30-day notice period for cancellations, allowing us to make necessary arrangements and ensure a smooth transition.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Restrictions Disclosure:</h2>
                        <p>Certain products and services may be subject to restrictions. We are committed to disclosing any applicable restrictions and their potential impact on your experience with us to build trust and transparency.</p>
                    </section>

                    <section>
                        <h2>Privacy Policy:</h2>
                        <p>Protecting your privacy is paramount to us. Our privacy policy outlines how we handle and protect your personal data in compliance with relevant laws and regulations. Your privacy and security are of utmost importance to us.</p>
                    </section>

                    <section>
                        <h2>Physical Address:</h2>
                        <p>For added credibility and transparency, our physical address is listed below:</p>
                        <p>
                            Luminary Growth Inc<br />
                            145 Columbia Street 210<br />
                            Waterloo, Ontario N2L 0K7<br />
                            Canada
                        </p>
                    </section>

                    <section>
                        <h2>Promotion Disclosure:</h2>
                        <p>Any promotions, discounts, or trials offered by us are clearly disclosed, including the conditions associated with them. Transparency in our promotional offerings helps prevent confusion and ensures a positive experience for our clients.</p>
                    </section>

                    <section>
                        <h2>PCI Compliance:</h2>
                        <p>We are committed to maintaining the highest standards of security and compliance. Our website, especially our payment form, utilizes HTTPS and other industry best practices to ensure the safe handling of your payment information. Rest assured that your payment details are handled securely when doing business with us.</p>
                    </section>

                    <section>
                        <h2>Acceptance of Credit Cards:</h2>
                        <p>We proudly accept various credit cards, which are prominently displayed on our website. This ensures that you can use your preferred payment method with ease and confidence.</p>
                    </section>

                    <section>
                        <p>Thank you for choosing Luminary Growth. If you have any further questions or concerns regarding our fulfillment policies, please do not hesitate to contact us. We look forward to serving you.</p>
                        <br />
                        <p>
                            Sincerely,<br />
                            Dimitri<br />
                            Founder<br />
                            Luminary Growth Inc
                        </p>
                    </section>
                </motion.div>
            </div>
        </section>
    );
};

export default Fulfillment;
