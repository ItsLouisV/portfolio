import React, { useState } from 'react';
import { ExternalLink, Cpu, Globe, Zap, Smartphone } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'Hệ thống Nhà thông minh IoT',
      category: 'iot',
      tech: ['React', 'NodeJS', 'ESP32', 'MQTT', 'MongoDB'],
      description: 'Hệ thống quản lý thiết bị gia dụng thời gian thực. Firmware ESP32 kết nối với Broker MQTT, Web dashboard hiển thị thông số cảm biến và điều khiển relay tức thì.',
      icon: <Cpu size={24} />,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/ItsLouisV'
    },
    {
      id: 2,
      title: 'Trang quản lý SaaS Dashboard',
      category: 'web',
      tech: ['ReactJS', 'Vite', 'Redux', 'Chart.js', 'Tailwind'],
      description: 'Nền tảng quản trị phân tích số liệu tài chính chuyên sâu. Thiết kế giao diện trực quan với biểu đồ thời gian thực, bảng tương tác nâng cao và chế độ dark mode mượt mà.',
      icon: <Globe size={24} />,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/ItsLouisV'
    },
    {
      id: 3,
      title: 'Nông nghiệp Thông minh Tự động',
      category: 'iot',
      tech: ['Embedded C', 'Arduino', 'ESP8266', 'Supabase', 'NextJS'],
      description: 'Hệ thống đo độ ẩm đất, nhiệt độ, ánh sáng và tự động tưới nước. Gửi cảnh báo về ứng dụng web và điện thoại thông qua Firebase Realtime Database.',
      icon: <Zap size={24} />,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/ItsLouisV'
    },
    {
      id: 4,
      title: 'Mạng xã hội di động Mini-Social',
      category: 'web',
      tech: ['Flutter', 'Dart', 'Supabase', 'Provider', 'PostgreSQL'],
      description: 'Ứng dụng mạng xã hội thu nhỏ trên thiết bị di động. Hỗ trợ người dùng đăng bài viết, chia sẻ ảnh đa phương tiện, tương tác thả tim, bình luận thời gian thực và bảo mật qua Supabase.',
      icon: <Smartphone size={24} />,
      gradient: 'linear-gradient(135deg, #02569B 0%, #0175C2 100%)',
      demoUrl: 'https://mini-social-khaki.vercel.app',
      githubUrl: 'https://github.com/ItsLouisV/mini-social'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Dự án <span className="gradient-text">Nổi Bật</span>
          </h2>
          <p className="section-subtitle">
            Các sản phẩm thực tế tôi đã thiết kế phần cứng và lập trình phần mềm
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tất cả
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web & Mobile
          </button>
          <button
            className={`filter-btn ${filter === 'iot' ? 'active' : ''}`}
            onClick={() => setFilter('iot')}
          >
            IoT / Hardware
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              {/* Visual Thumbnail Gradient */}
              <div className="project-thumbnail" style={{ background: project.gradient }}>
                <div className="project-thumb-glow"></div>
                <div className="project-icon-box">
                  {project.icon}
                </div>
              </div>

              {/* Info content */}
              <div className="project-info">
                <div className="project-tech-tags">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn" aria-label="GitHub Repository">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Mã nguồn
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn primary-link" aria-label="Live Demo">
                    <ExternalLink size={18} /> Trải nghiệm
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
