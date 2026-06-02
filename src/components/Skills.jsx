import React from 'react';
import './Skills.css';

export default function Skills() {
  const mobileSkills = [
    { name: 'React Native / Expo', level: 90 },
    { name: 'JavaScript (ES6+) / TypeScript', level: 85 },
    { name: 'Flutter / Dart (Basic)', level: 65 },
    { name: 'Python', level: 60 }
  ];

  const backendAndToolsSkills = [
    { name: 'Supabase / Firebase (Realtime)', level: 85 },
    { name: 'NodeJS / REST API', level: 75 },
    { name: 'AI Integration (Chatbot, Simulation)', level: 80 },
    { name: 'Git / GitHub / Figma / Docker', level: 80 },
    { name: 'UI/UX Design & Performance Optimization', level: 75 }
  ];

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Năng lực <span className="gradient-text">Kỹ Năng</span>
          </h2>
          <p className="section-subtitle">
            Những ngôn ngữ lập trình, nền tảng di động và công cụ tôi sử dụng thành thạo từ CV
          </p>
        </div>

        <div className="skills-grid">
          {/* Mobile & Programming Category */}
          <div className="skills-category glass-panel">
            <h3 className="category-title">Lập trình Di động & Ngôn ngữ</h3>
            <p className="category-desc">
              Tập trung phát triển ứng dụng di động chất lượng cao, đa nền tảng sử dụng React Native, Expo và Flutter với trải nghiệm người dùng tối ưu.
            </p>
            <div className="skills-list">
              {mobileSkills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill fill-frontend"
                      style={{ '--fill-width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Services Category */}
          <div className="skills-category glass-panel">
            <h3 className="category-title">Backend, Dịch vụ Cloud & Công cụ</h3>
            <p className="category-desc">
              Xây dựng kiến trúc backend linh hoạt qua Supabase và Firebase Realtime, tích hợp các mô hình trí tuệ nhân tạo (AI APIs) và tối ưu hóa hệ thống.
            </p>
            <div className="skills-list">
              {backendAndToolsSkills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill fill-backend"
                      style={{ '--fill-width': `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
