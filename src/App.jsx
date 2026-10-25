import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Scroll-Up Button */}
      {showScroll && (
        <button className="scroll-up-btn" onClick={scrollTop} aria-label="Scroll to top">
          <ChevronUp size={24} />
        </button>
      )}

      {/* Main Sections */}
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      {/* Footer */}
      <footer>
        <span>
          Created By <a href="#home">{portfolioData.personal.name}</a> |{' '}
          <span>{new Date().getFullYear()} All rights reserved.</span>
        </span>
      </footer>
    </div>
  );
}

export default App;