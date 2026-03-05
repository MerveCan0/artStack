import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Send, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Sol Kısım: Marka ve Motto */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Sparkles size={28} className="logo-icon" />
                        <span>St<span className="accent">Art</span></span>
                    </div>
                    <p className="footer-bio">
                        The ultimate sanctuary for digital artists. Share your soul,
                        connect with creators, and inspire the world with your vision.
                    </p>
                    <div className="footer-socials">
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Github size={20} /></a>
                        <a href="#"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Orta Kısım: Hızlı Linkler */}
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Explore Art</a></li>
                            <li><a href="#">Showcase</a></li>
                            <li><a href="#">Trending</a></li>
                            <li><a href="#">Challenges</a></li>
                        </ul>
                    </div>
                    <div className="link-group">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="#">Artists</a></li>
                            <li><a href="#">Guidelines</a></li>
                            <li><a href="#">Feedback</a></li>
                        </ul>
                    </div>
                </div>

                {/* Sağ Kısım: Newsletter */}
                <div className="footer-newsletter">
                    <h4>Follow Updates</h4>
                    <p>Subscribe to be notified about new features and latest art updates.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" aria-label="Subscribe">
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} ArtSphere - All rights reserved - By MERO</p>
                <div className="footer-legal">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;