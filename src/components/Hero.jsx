import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex % personal.roles.length];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, personal.roles]);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="hero-grid">
          {/* Left: Text & CTA */}
          <div className="home-content">
            <div className="ai-status-pill">
              <span className="pulsing-dot"></span>
              AI & Machine Learning Engineer | Data Analyst
            </div>
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">{personal.name}</div>
            <div className="text-3">
              And I'm a <span>{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <a href="#contact">Let's Connect</a>
          </div>

          {/* Right: Profile Picture */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src={profileImg}
                alt={personal.name}
                className="hero-profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;