import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">Let's work together!</p>
        </div>

        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__input-group">
              <label htmlFor="name" className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="email" className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__input"
                required
              />
            </div>

            <div className="contact__input-group">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__textarea"
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              Send Message
            </button>
          </form>

          <div className="contact__social">
            <div className="contact__social-links">
              <a href="https://github.com/rishabhchouhan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/rishabhchouhan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/rishabhchouhan" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <FaTwitter />
              </a>
              <a href="mailto:rishabhchouhan@example.com" className="contact__social-link">
                <FaEnvelope />
              </a>
            </div>
            <p className="contact__copyright">Rishabh Chouhan © 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 