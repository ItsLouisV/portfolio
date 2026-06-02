import React, { useState, useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Monitor, Laptop, Tablet, Smartphone } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [device, setDevice] = useState('desktop');
  const [ripples, setRipples] = useState([]);

  // Check if current context is inside the iframe
  const isIframe = typeof window !== 'undefined' &&
    (window.self !== window.top || window.location.search.includes('iframe=true'));

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Global mouse click ripples (MOBA style)
  useEffect(() => {
    const handleMouseDown = (e) => {
      const id = Date.now() + Math.random();
      const ripple = {
        id,
        x: e.clientX,
        y: e.clientY
      };
      setRipples((prev) => [...prev, ripple]);

      // Auto cleanup after ripple animation (550ms)
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 550);
    };

    window.addEventListener('mousedown', handleMouseDown);
    return () => window.removeEventListener('mousedown', handleMouseDown);
  }, []);

  // Intersection Observer for Scroll Reveal (only active inside the iframe or standard full desktop mode)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // If inside the iframe, render the clean portfolio website
  if (isIframe) {
    return (
      <>
        {/* Background Neon Glowing Orbs */}
        <div className="bg-glow-container">
          <div className="bg-glow-orb bg-glow-1"></div>
          <div className="bg-glow-orb bg-glow-2"></div>
        </div>

        {/* Main Layout Components */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        {/* MOBA Click Ripples */}
        {ripples.map((r) => (
          <div key={r.id} className="click-ripple" style={{ left: r.x, top: r.y }}>
            <div className="ripple-ring ring-1"></div>
            <div className="ripple-ring ring-2"></div>
            <div className="ripple-center"></div>
          </div>
        ))}
      </>
    );
  }

  // If on the main parent window, render the premium Device Simulator shell
  const iframeSrc = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?iframe=true`
    : '';

  return (
    <div className="preview-shell">
      {/* Floating Glassmorphic Device Selector */}
      <div className="preview-control-bar glass-panel">
        <span className="preview-bar-label">Bố cục trang</span>

        <button
          className={`device-btn ${device === 'desktop' ? 'active' : ''}`}
          onClick={() => setDevice('desktop')}
          data-tooltip="Desktop"
          aria-label="Desktop Layout"
        >
          <Monitor size={20} />
        </button>

        <button
          className={`device-btn ${device === 'laptop' ? 'active' : ''}`}
          onClick={() => setDevice('laptop')}
          data-tooltip="Laptop"
          aria-label="Laptop Layout"
        >
          <Laptop size={20} />
        </button>

        <button
          className={`device-btn ${device === 'tablet' ? 'active' : ''}`}
          onClick={() => setDevice('tablet')}
          data-tooltip="Tablet"
          aria-label="Tablet Layout"
        >
          <Tablet size={20} />
        </button>

        <button
          className={`device-btn ${device === 'mobile' ? 'active' : ''}`}
          onClick={() => setDevice('mobile')}
          data-tooltip="Mobile"
          aria-label="Mobile Layout"
        >
          <Smartphone size={20} />
        </button>
      </div>

      {/* Interactive Device Preview Area */}
      <div className="preview-display-area">
        <div className={`device-frame ${device}`}>
          <iframe
            src={iframeSrc}
            title="Portfolio Responsive Preview"
            className="preview-iframe"
          />
        </div>
      </div>

      {/* MOBA Click Ripples for Parent Shell */}
      {ripples.map((r) => (
        <div key={r.id} className="click-ripple" style={{ left: r.x, top: r.y }}>
          <div className="ripple-ring ring-1"></div>
          <div className="ripple-ring ring-2"></div>
          <div className="ripple-center"></div>
        </div>
      ))}
    </div>
  );
}
