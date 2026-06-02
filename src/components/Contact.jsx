import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Kết <span className="gradient-text">Nối</span> Với Tôi
          </h2>
          <p className="section-subtitle">
            Gửi tin nhắn hoặc liên hệ trực tiếp để hợp tác phát triển các dự án
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Information */}
          <div className="contact-info-container">
            <div className="info-card glass-panel">
              <div className="info-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Email trực tiếp</span>
                <a href="mailto:linhnv7104@gmail.com" className="info-value">linhnv7104@gmail.com</a>
              </div>
            </div>

            <div className="info-card glass-panel">
              <div className="info-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div className="info-details">
                <span className="info-label">Địa điểm hiện tại</span>
                <span className="info-value">TP. Thủ Dầu Một, Bình Dương cũ, Việt Nam</span>
              </div>
            </div>

            {/* Social Grid Card */}
            <div className="social-links-card glass-panel">
              <h3 className="social-title">Mạng xã hội</h3>
              <p className="social-desc">Hãy kết nối với tôi trên các kênh truyền thông chuyên môn:</p>
              <div className="social-buttons">
                <a href="https://github.com/ItsLouisV" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container glass-panel">
            {isSubmitted ? (
              <div className="form-success-message">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Gửi tin nhắn thành công!</h3>
                <p>Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Địa chỉ Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Chủ đề</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Hợp tác phát triển dự án..."
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Nội dung tin nhắn</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hãy viết tin nhắn của bạn ở đây..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={loading}>
                  {loading ? (
                    <span className="btn-spinner"></span>
                  ) : (
                    <>
                      Gửi tin nhắn <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
