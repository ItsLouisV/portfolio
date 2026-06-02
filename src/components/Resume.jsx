import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Lập trình viên React Native & AI (Main Developer)',
      company: 'Dự án AI-Powered Job & Mock Interview App',
      period: '11/2025 - Hiện tại',
      description: 'Chịu trách nhiệm thiết kế toàn bộ kiến trúc di động và tích hợp các dịch vụ AI nâng cao cho ứng dụng tìm việc & phỏng vấn giả lập.',
      achievements: [
        'Phát triển ứng dụng di động đa nền tảng bằng React Native và Expo giúp người dùng chuẩn bị phỏng vấn với các tình huống giả lập thông minh.',
        'Tích hợp các mô hình AI APIs phân tích câu trả lời, giọng nói và văn bản của người dùng để trả về đánh giá thời gian thực.',
        'Kết nối dịch vụ đám mây Supabase làm hạ tầng backend cho việc quản lý cơ sở dữ liệu và xác thực người dùng an toàn.'
      ]
    },
    {
      role: 'Lập trình viên React Native',
      company: 'Dự án Social Networking Mobile App',
      period: '02/2025 - 10/2025',
      description: 'Lập trình ứng dụng mạng xã hội thu nhỏ trên nền tảng di động với phong cách thiết kế hiện đại và hiệu năng cao.',
      achievements: [
        'Xây dựng các module chức năng chính gồm: Đăng ký/đăng nhập, bảng tin bài viết, trang cá nhân và theo dõi trạng thái.',
        'Tích hợp giải pháp nhắn tin trò chuyện tức thì (chat) sử dụng cơ chế Supabase Realtime.',
        'Sáng tạo giao diện Glassmorphism độc đáo kết hợp micro-animations mượt mà tối ưu cảm xúc người dùng.'
      ]
    },
    {
      role: 'Lập trình viên Flutter (Dự án Học tập)',
      company: 'Dự án Basic Flutter Application',
      period: '03/2026 - Hiện tại',
      description: 'Nghiên cứu nâng cao về kiến trúc phát triển ứng dụng di động đa nền tảng bằng hệ sinh thái Flutter & Dart.',
      achievements: [
        'Xây dựng và thực hành trên hệ thống Widget phân cấp của Flutter để tối ưu giao diện.',
        'Triển khai các cơ chế điều hướng màn hình (navigation) phức tạp và quản lý trạng thái ứng dụng hiệu quả.'
      ]
    }
  ];

  const educationData = [
    {
      degree: 'Cử nhân Công nghệ Thông tin',
      institution: 'Đại học Thủ Dầu Một (Thu Dau Mot University)',
      period: '2023 - 2027 (Dự kiến)',
      description: 'Chuyên ngành Công nghệ thông tin, tập trung chuyên sâu vào lập trình ứng dụng di động và tích hợp AI.',
      achievements: [
        'Sinh viên năm cuối tích cực nghiên cứu và phát triển các sản phẩm công nghệ thực tiễn.',
        'Thành thạo xây dựng sản phẩm hoàn thiện từ thiết kế UI/UX trên Figma đến triển khai thực tế trên Android & iOS.',
        'Đam mê cập nhật các xu hướng công nghệ mới như AI Chatbots, Trí tuệ nhân tạo tạo sinh và các dịch vụ Cloud thế hệ mới.'
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
            Tóm tắt quá trình học vấn cùng các dự án di động thực tế nổi bật từ CV của tôi
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="resume-tabs">
          <button
            className={`tab-btn glass-panel ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={18} /> Các dự án thực tế
          </button>
          <button
            className={`tab-btn glass-panel ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={18} /> Học vấn của tôi
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
