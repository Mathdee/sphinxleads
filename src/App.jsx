import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import housesImage from './assets/house.jpg';
import './App.css';

const FadeInWhenVisible = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [isNavSolid, setIsNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSolid(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <nav className={`nav ${isNavSolid ? 'nav-solid' : ''}`}>
        <div className="nav-container">
          <h1 className="nav-logo">Sphinx Leads</h1>
          <a href="mailto:your@email.com" className="nav-contact">Contact Us</a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-content">
          <FadeInWhenVisible>
            <h2 className="hero-title">Transform Your Real Estate Business</h2>
            <p className="hero-subtitle">
              Sphinx leads delivered directly to you. No hassle, just qualified sellers ready to connect.
            </p>
            <motion.a
              href="https://estate-form.vercel.app"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Lead System
            </motion.a>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="stats-section">
        <FadeInWhenVisible>
          <div className="stats-grid">
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="stat-number">5-8</div>
              <div className="stat-text">Qualified Leads Monthly</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="stat-number">24hr</div>
              <div className="stat-text">Lead Delivery Time</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="stat-number">100%</div>
              <div className="stat-text">Exclusive Rights</div>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="services-section">
        <FadeInWhenVisible>
          <h3 className="section-title">Our Premium Services</h3>
          <div className="services-grid">
            <motion.div
              className="service-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-emoji">🎯</div>
              <h4 className="service-title">Lead Generation</h4>
              <ul className="service-list">
                <motion.li whileHover={{ x: 5 }}>✓ Exclusive seller leads</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Verified contact information</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Detailed property information</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Timeline to sell</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Pay per qualified lead</motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="service-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="service-emoji">📈</div>
              <h4 className="service-title">Ad Management</h4>
              <ul className="service-list">
                <motion.li whileHover={{ x: 5 }}>✓ Professional Facebook campaigns</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Exclusive territory rights</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Daily optimization</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Performance tracking</motion.li>
                <motion.li whileHover={{ x: 5 }}>✓ Detailed reporting</motion.li>
              </ul>
            </motion.div>
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="cta-section">
        <FadeInWhenVisible>
          <div className="cta-card">
            <h3 className="cta-title">Ready to Get Started?</h3>
            <p className="cta-text">
              Join our network of successful agents and start receiving qualified leads today.
            </p>
            <motion.a
              href="mailto:your@email.com"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.a>
          </div>
        </FadeInWhenVisible>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-column">
              <h4>Sphinx Leads</h4>
              <p>Professional lead generation services for real estate agents.</p>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p>Email: sphinxleads@gmail.com</p>
              <p>Support: 9am-5pm EST</p>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <motion.div className="footer-links">
                <motion.p whileHover={{ x: 5 }}>Terms of Service</motion.p>
                <motion.p whileHover={{ x: 5 }}>Privacy Policy</motion.p>
                <motion.p whileHover={{ x: 5 }}>Refund Policy</motion.p>
              </motion.div>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 Sphinx Leads. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;