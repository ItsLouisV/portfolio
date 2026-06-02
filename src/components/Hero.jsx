import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const titles = ['Mobile Application Developer', 'React Native Specialist', 'IT Student @ TDMU'];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentTitleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullTitle.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullTitle) {
          // Pause at the end
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullTitle.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge glass-panel">
            <span className="badge-dot"></span>
            Sẵn sàng cho các thử thách mới
          </div>
          <h1 className="hero-title">
            Xin chào, mình là <br />
            <span className="gradient-text hero-name">Nguyễn Văn Linh</span>
          </h1>
          <h2 className="hero-subtitle-loop">
            Một {" "}<span className="typed-text">{currentText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Sinh viên Công nghệ Thông tin năm cuối tại Đại học Thủ Dầu Một, chuyên sâu về phát triển ứng dụng di động. Đam mê kiến tạo các ứng dụng thời gian thực và tích hợp AI sử dụng React Native, Supabase và Firebase.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Xem dự án <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Liên hệ <Mail size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/ItsLouisV" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass-panel" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn glass-panel" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="mailto:linhnv7104@gmail.com" className="social-icon-btn glass-panel" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-glow"></div>
          <div className="hero-image-card glass-panel">
            <img src="/avt2.jpg" alt="Louis V Avatar" className="hero-avatar" />
            <div className="hero-image-overlay">
              <div className="overlay-stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Dự án nổi bật</span>
              </div>
              <div className="overlay-stat">
                <span className="stat-num">2027</span>
                <span className="stat-label">Năm tốt nghiệp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
