import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Về tôi', href: '#about' },
    { name: 'Hành trình', href: '#resume' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Liên hệ', href: '#contact' }
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            <span className="logo-dot"></span>
            LOUIS<span className="gradient-text">.V</span>
          </a>

          {/* Desktop Menu */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-item">
                {link.name}
              </a>
            ))}
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} className="theme-icon" /> : <Moon size={20} className="theme-icon" />}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="navbar-mobile-actions">
            <button className="theme-toggle mobile-only" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} className="theme-icon" /> : <Moon size={20} className="theme-icon" />}
            </button>
            <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`navbar-mobile-panel glass-panel ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-mobile-item"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(false)}
      />
    </>
  );
}
