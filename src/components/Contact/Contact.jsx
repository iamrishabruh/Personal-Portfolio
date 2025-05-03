import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaInstagram, FaFacebook, FaReddit, FaTiktok, FaSoundcloud } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:rchouhan.network@gmail.com';
  };

  const socialLinks = [
    { icon: FaTwitter, url: 'https://x.com/rishabruh', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rishabruh/', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100012571633391', label: 'Facebook' },
    { icon: FaReddit, url: 'https://www.reddit.com/user/Rishabruh/', label: 'Reddit' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@rishabruh', label: 'TikTok' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/user-327272861', label: 'SoundCloud' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-content"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="contact-description">
            Feel free to reach out to me via email. I'm always open to discussing new projects, 
            creative ideas, or opportunities to be part of your visions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="email-button"
            onClick={handleEmailClick}
          >
            <FaEnvelope />
            <span>rchouhan.network@gmail.com</span>
          </motion.button>

          <div className="social-links">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ duration: 0.3 }}
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="copyright">
          © Rishabh Chouhan 2025
        </div>
      </div>
    </section>
  );
};

export default Contact; 