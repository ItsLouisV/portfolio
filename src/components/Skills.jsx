import React from 'react';
import './Skills.css';

export default function Skills() {
  const frontendSkills = [
    { name: 'HTML5 / CSS3', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'ReactJS / Vite', level: 85 },
    { name: 'Responsive Web Design', level: 90 },
    { name: 'Next.js', level: 70 }
  ];

  const backendAndIotSkills = [
    { name: 'NodeJS / Express', level: 80 },
    { name: 'Embedded C / C++', level: 85 },
    { name: 'ESP32 / Arduino / Sensors', level: 90 },
    { name: 'MQTT / HTTP / WebSockets', level: 85 },
    { name: 'Database (SQL, MongoDB)', level: 75 }
  ];

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Năng lực <span className="gradient-text">Kỹ Năng</span>
          </h2>
          <p className="section-subtitle">
            Những công cụ công nghệ và mức độ thành thạo trong các dự án thực tế
          </p>
        </div>

        <div className="skills-grid">
          {/* Frontend Category */}
          <div className="skills-category glass-panel">
            <h3 className="category-title">Phát triển Frontend</h3>
            <p className="category-desc">
              Tạo ra giao diện web đẹp mắt, tối ưu hóa SEO và mang lại trải nghiệm người dùng tối ưu nhất trên mọi loại thiết bị.
            </p>
            <div className="skills-list">
              {frontendSkills.map((skill, idx) => (
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

          {/* Backend & IoT Category */}
          <div className="skills-category glass-panel">
            <h3 className="category-title">Backend & Embedded IoT</h3>
            <p className="category-desc">
              Thiết kế cơ sở dữ liệu, APIs thời gian thực và lập trình vi điều khiển tương tác trực tiếp với thế giới vật lý qua internet.
            </p>
            <div className="skills-list">
              {backendAndIotSkills.map((skill, idx) => (
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
