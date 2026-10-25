import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home">Portfo<span>lio.</span></a>
        </div>
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#teams" onClick={closeMenu}>Education</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;