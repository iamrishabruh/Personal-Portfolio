import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaFacebook, FaReddit, FaTiktok, FaSoundcloud } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://x.com/rishabruh', label: 'Twitter' },
    { icon: FaInstagram, url: 'https://www.instagram.com/rishabruh/', label: 'Instagram' },
    { icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100012571633391', label: 'Facebook' },
    { icon: FaReddit, url: 'https://www.reddit.com/user/Rishabruh/', label: 'Reddit' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@rishabruh', label: 'TikTok' },
    { icon: FaSoundcloud, url: 'https://soundcloud.com/user-327272861', label: 'SoundCloud' },
  ];

  return (
    <div className="social-content">
      <h2 className="section-title">Connect with me elsewhere.</h2>
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
      <p className="copyright">© {new Date().getFullYear()} Rishabh Chouhan. All rights reserved.</p>
    </div>
  );
};

export default SocialLinks; 