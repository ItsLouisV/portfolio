import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Kỹ sư Web & IoT Fullstack',
      company: 'SmartHome Solutions JSC',
      period: '2024 - Hiện tại',
      description: 'Chịu trách nhiệm thiết kế và lập trình các thiết bị điều khiển thông minh ESP32 kết nối với dịch vụ Web điều khiển bằng ReactJS và NodeJS thông qua WebSocket & MQTT.',
      achievements: [
        'Xây dựng thành công dashboard quản lý nhà thông minh hỗ trợ 1000+ thiết bị kết nối đồng thời với thời gian phản hồi dưới 100ms.',
        'Thiết kế kiến trúc hệ thống backend NodeJS tối ưu hóa hiệu suất truy vấn, giảm 30% tải CPU.',
        'Đồng phát triển ứng dụng di động React Native đồng bộ hóa thời gian thực.'
      ]
    },
    {
      role: 'Nhà phát triển Frontend',
      company: 'DevVision Global',
      period: '2022 - 2024',
      description: 'Lập trình viên ReactJS phát triển các sản phẩm phần mềm SaaS cao cấp phục vụ doanh nghiệp trong và ngoài nước.',
      achievements: [
        'Lập trình 12+ trang dashboard responsive hoàn hảo sử dụng ReactJS, Redux Toolkit và CSS Modules.',
        'Cải thiện hiệu năng tải trang web bằng cách áp dụng code splitting và tối ưu hóa tài nguyên hình ảnh (đạt 90+ điểm Lighthouse).',
        'Tương tác trực tiếp với khách hàng quốc tế để làm rõ yêu cầu nghiệp vụ và bàn giao sản phẩm đúng hạn.'
      ]
    },
    {
      role: 'Thực tập sinh IoT',
      company: 'TechLab Innovation',
      period: '06/2022 - 12/2022',
      description: 'Nghiên cứu các giải pháp phần cứng nhúng cơ bản và tích hợp truyền thông không dây.',
      achievements: [
        'Lập trình firmware C/C++ cho vi điều khiển Arduino và ESP8266.',
        'Xây dựng demo hệ thống tưới cây tự động gửi dữ liệu cảm biến đất lên cloud Firebase.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Kỹ sư Công nghệ Thông tin',
      institution: 'Đại học Bách Khoa',
      period: '2020 - 2024',
      description: 'Chuyên ngành Hệ thống thông tin và Mạng máy tính. Tốt nghiệp loại Giỏi.',
      achievements: [
        'Đề tài nghiên cứu khoa học: "Hệ thống giám sát chất lượng không khí đô thị thời gian thực sử dụng mạng cảm biến LoRaWAN" đạt điểm tối đa.',
        'Đạt giải Nhì cuộc thi Olympic Tin học cấp trường.',
        'Thành viên ban học tập Câu lạc bộ IoT & Embedded.'
      ]
    },
    {
      degree: 'Chứng chỉ Lập trình chuyên nghiệp',
      institution: 'AWS Certified Cloud Practitioner',
      period: '2024',
      description: 'Xác thực năng lực thiết kế và triển khai giải pháp điện toán đám mây trên nền tảng Amazon Web Services.',
      achievements: [
        'Hiểu sâu sắc về các dịch vụ lõi của AWS (EC2, S3, RDS, Lambda, IoT Core).',
        'Áp dụng kiến thức triển khai hệ thống thu thập dữ liệu IoT an toàn và có khả năng mở rộng.'
      ]
    }
  ];

  return (
    <section id="resume" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Hành Trình</span> Của Tôi
          </h2>
          <p className="section-subtitle">
            Tóm tắt quá trình học vấn và kinh nghiệm làm việc thực tế
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="resume-tabs">
          <button
            className={`tab-btn glass-panel ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} /> Kinh nghiệm làm việc
          </button>
          <button
            className={`tab-btn glass-panel ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} /> Học vấn & Chứng chỉ
          </button>
        </div>

        {/* Timeline Content */}
        <div className="timeline-container">
          {activeTab === 'experience' && (
            <div className="timeline-list">
              {experienceData.map((item, idx) => (
                <div key={idx} className="timeline-item glass-panel">
                  <div className="timeline-dot-wrapper">
                    <span className="timeline-dot"></span>
                  </div>
                  <div className="timeline-header">
                    <span className="timeline-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <h4 className="timeline-company">{item.company}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-desc">{item.description}</p>
                    <ul className="timeline-achievements">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="timeline-list">
              {educationData.map((item, idx) => (
                <div key={idx} className="timeline-item glass-panel">
                  <div className="timeline-dot-wrapper">
                    <span className="timeline-dot"></span>
                  </div>
                  <div className="timeline-header">
                    <span className="timeline-period">
                      <Calendar size={14} /> {item.period}
                    </span>
                    <h3 className="timeline-role">{item.degree}</h3>
                    <h4 className="timeline-company">{item.institution}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-desc">{item.description}</p>
                    <ul className="timeline-achievements">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
