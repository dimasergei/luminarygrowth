import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
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
                    <h1>Privacy Policy</h1>
                    <p className="last-updated">Last Updated: February 2026</p>

                    <section>
                        <h2>Consent</h2>
                        <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                    </section>

                    <section>
                        <h2>Information we collect</h2>
                        <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                        <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
                    </section>

                    <section>
                        <h2>How we use your information</h2>
                        <p>We use the information we collect in various ways, including to:</p>
                        <ul>
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, either directly or through one of our partners</li>
                            <li>Find and prevent fraud</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Log Files</h2>
                        <p>Luminary Growth follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
                    </section>

                    <section>
                        <h2>Cookies and Web Beacons</h2>
                        <p>Like any other website, Luminary Growth uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                    </section>

                    <section>
                        <h2>CCPA Privacy Rights</h2>
                        <p>Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers, request deletion of data, and request not to sell data.</p>
                    </section>

                    <section>
                        <h2>GDPR Data Protection Rights</h2>
                        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>
                    </section>

                    <section>
                        <h2>Contact Us</h2>
                        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:luminaryllc@protonmail.com">luminaryllc@protonmail.com</a>.</p>
                    </section>
                </motion.div>
            </div>
        </section>
    );
};

export default Privacy;
