import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <p className="copyright">
            © {new Date().getFullYear()} Louis V. Bản quyền được bảo lưu.
          </p>
          <p className="powered-by">
            Thiết kế & Lập trình bằng <span className="powered-highlight">ReactJS & Vite</span>
          </p>
        </div>

        {/* Back To Top Button */}
        <button
          className={`back-to-top glass-panel ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
