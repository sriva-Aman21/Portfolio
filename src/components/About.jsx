import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/resume.pdf';

const About = () => {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personal.aboutRoles || personal.roles;
    const currentRole = roles[roleIndex % roles.length];
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
  }, [displayText, isDeleting, roleIndex, personal.roles, personal.aboutRoles]);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src={profileImg}
              alt={personal.name}
            />
          </div>
          <div className="column right">
            <div className="text">
              I'm {personal.name} and I'm a <span>{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p>{personal.bio}</p>
            <a
              href={resumePdf}
              download="AMAN_SRIVASTAV_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;