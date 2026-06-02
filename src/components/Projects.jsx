import React, { useState } from 'react';
import { ExternalLink, Smartphone, Sparkles, Code2, Calendar } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'AI-Powered Job Platform & Mock Interview App',
      category: 'react-native',
      type: 'Dự án chính (Main Project)',
      timeline: 'Th11/2025 - Hiện tại',
      tech: ['React Native', 'Expo', 'Supabase', 'AI APIs', 'TypeScript'],
      description: 'Ứng dụng di động hỗ trợ tìm kiếm việc làm và chuẩn bị phỏng vấn đột phá, tích hợp công nghệ AI tiên tiến nhằm phân tích câu trả lời của ứng viên và phản hồi thông minh trong thời gian thực.',
      bullets: [
        'Phát triển ứng dụng di động tìm kiếm việc làm và chuẩn bị phỏng vấn, tích hợp các tính năng dựa trên AI để giả lập các tình huống phỏng vấn thực tế.',
        'Tích hợp các tính năng AI để phân tích câu trả lời của người dùng và mô phỏng các buổi phỏng vấn thử nghiệm.',
        'Thiết kế hệ thống luyện tập phỏng vấn tương tác cao kèm đánh giá và phản hồi thời gian thực.',
        'Xây dựng tích hợp backend tối ưu và khả năng mở rộng bằng Supabase cho xác thực người dùng và quản lý cơ sở dữ liệu.',
        'Tập trung nâng cao trải nghiệm người dùng (UX) thông qua hệ thống đề xuất thông minh và giao diện hiện đại.'
      ],
      icon: <Sparkles size={24} />,
      gradient: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
      demoUrl: 'https://github.com/ItsLouisV',
      githubUrl: 'https://github.com/ItsLouisV/cvision'
    },
    {
      id: 2,
      title: 'Social Networking Mobile Application',
      category: 'react-native',
      type: 'Dự án ứng dụng di động',
      timeline: 'Th4/2026 - Hiện tại',
      tech: ['React Native', 'Expo', 'Supabase', 'Supabase Realtime'],
      description: 'Ứng dụng mạng xã hội thu nhỏ trên thiết bị di động, tích hợp đầy đủ tính năng tương tác người dùng hiện đại và cơ chế đồng bộ hóa tin nhắn tức thời.',
      bullets: [
        'Phát triển ứng dụng mạng xã hội di động với đầy đủ tính năng xác thực bảo mật, đăng bài viết và quản lý trang cá nhân người dùng.',
        'Triển khai hệ thống nhắn tin trò chuyện thời gian thực mượt mà bằng Supabase Realtime.',
        'Thiết kế giao diện người dùng hiện đại, tinh tế với các hiệu ứng chuyển động mượt mà và phong cách kính mờ (glassmorphism).'
      ],
      icon: <Smartphone size={24} />,
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      demoUrl: 'https://mini-social-louis.vercel.app',
      githubUrl: 'https://github.com/ItsLouisV/mini-social'
    },
    {
      id: 3,
      title: 'Basic Flutter Application',
      category: 'flutter',
      type: 'Dự án học tập (Learning)',
      timeline: 'Th3/2026 - Hiện tại',
      tech: ['Flutter', 'Dart', 'Widget System', 'UI Navigation'],
      description: 'Ứng dụng tìm hiểu thực hành hệ sinh thái Flutter, tập trung nghiên cứu tối ưu hóa hiệu năng vẽ widget và quản lý trạng thái luồng người dùng.',
      bullets: [
        'Xây dựng ứng dụng di động cơ bản để khám phá chuyên sâu kiến trúc đa nền tảng và hệ thống Widget linh hoạt của Flutter.',
        'Triển khai giao diện người dùng trực quan và cơ chế điều hướng qua lại giữa các màn hình hiệu quả.'
      ],
      icon: <Code2 size={24} />,
      gradient: 'linear-gradient(135deg, #02569B 0%, #0175C2 100%)',
      demoUrl: 'https://github.com/ItsLouisV',
      githubUrl: 'https://github.com/ItsLouisV'
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
            Các ứng dụng di động thực tế tôi đã thiết kế giao diện và lập trình hoàn thiện từ CV của tôi
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
            className={`filter-btn ${filter === 'react-native' ? 'active' : ''}`}
            onClick={() => setFilter('react-native')}
          >
            React Native & AI
          </button>
          <button
            className={`filter-btn ${filter === 'flutter' ? 'active' : ''}`}
            onClick={() => setFilter('flutter')}
          >
            Flutter & Dart
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
                <div className="project-header-meta">
                  <span className="project-timeline">
                    <Calendar size={13} /> {project.timeline}
                  </span>
                  <span className="project-type-badge">{project.type}</span>
                </div>

                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>

                {/* CV Bullet points with custom premium design */}
                <ul className="project-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="project-bullet-item">
                      <span className="bullet-dot"></span>
                      <span className="bullet-text">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tech-tags">
                  {project.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>

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
