import React, { useState } from 'react';
import { User, MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const personal = portfolioData?.personal || {};
  const contact = personal.contact || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipientEmail = contact.email || 'aman21sriva@gmail.com';
    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          {/* Left Column: Direct Info */}
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
              I am open to data analysis roles, analytics consulting, and collaborative engineering projects. Feel free to reach out directly via email, phone, or connect on LinkedIn and GitHub.
            </p>

            <div className="icons">
              <div className="row">
                <User size={22} color="crimson" />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">{personal.name || 'Aman Srivastav'}</div>
                </div>
              </div>

              <div className="row">
                <MapPin size={22} color="crimson" />
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">{contact.location || 'Lucknow (UP), India'}</div>
                </div>
              </div>

              <div className="row">
                <Mail size={22} color="crimson" />
                <div className="info">
                  <div className="head">Email</div>
                  <a
                    href={`mailto:${contact.email || 'aman21sriva@gmail.com'}`}
                    className="sub-title"
                    style={{ color: '#333', textDecoration: 'none' }}
                  >
                    {contact.email || 'aman21sriva@gmail.com'}
                  </a>
                </div>
              </div>

              <div className="row">
                <Phone size={22} color="crimson" />
                <div className="info">
                  <div className="head">Phone</div>
                  <a
                    href={`tel:${contact.phone || '+917307577102'}`}
                    className="sub-title"
                    style={{ color: '#333', textDecoration: 'none' }}
                  >
                    {contact.phone || '+91 7307577102'}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '15px', marginTop: '25px', flexWrap: 'wrap' }}>
              <a
                href={contact.linkedin || 'https://www.linkedin.com/in/aman-srivastav-988b11336/'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#0a66c2',
                  color: '#fff',
                  padding: '9px 18px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                LinkedIn Profile
              </a>

              <a
                href={contact.github || 'https://github.com/sriva-Aman21'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#24292e',
                  color: '#fff',
                  padding: '9px 18px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Describe your project or message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="button-area">
                <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <Send size={16} />
                  <span>Send message</span>
                </button>
              </div>

              {submitted && (
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#2e7d32', fontSize: '14px' }}>
                  <CheckCircle2 size={18} />
                  <span>Opening mail draft... Thank you for reaching out!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;