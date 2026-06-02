import React from 'react';
import { Smartphone, Layers, Brain, Database } from 'lucide-react';
import './About.css';

export default function About() {
  const values = [
    {
      icon: <Smartphone size={24} className="value-icon" />,
      title: 'Phát triển Mobile',
      description: 'Lập trình ứng dụng di động đa nền tảng mượt mà sử dụng React Native, Expo và Flutter.'
    },
    {
      icon: <Layers size={24} className="value-icon" />,
      title: 'Tối ưu Trải nghiệm',
      description: 'Tập trung tối ưu hiệu năng vẽ widget, hoạt ảnh chuyển động và tốc độ phản hồi di động.'
    },
    {
      icon: <Brain size={24} className="value-icon" />,
      title: 'Tích hợp AI',
      description: 'Áp dụng các mô hình trí tuệ nhân tạo (AI APIs) giải quyết phỏng vấn và trò chuyện giả lập.'
    },
    {
      icon: <Database size={24} className="value-icon" />,
      title: 'Hạ tầng Cloud',
      description: 'Sử dụng thuần thục Supabase Realtime và Firebase trong xác thực và quản lý dữ liệu.'
    }
  ];

  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Về <span className="gradient-text">Tôi</span>
          </h2>
          <p className="section-subtitle">
            Hành trình theo đuổi đam mê phát triển ứng dụng di động thông minh
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-container glass-panel">
            <h3 className="about-heading">Chuyên tâm xây dựng ứng dụng di động thông minh</h3>
            <p className="about-paragraph">
              Xin chào! Mình là <strong>Nguyễn Văn Linh (ItsLouisV)</strong>, sinh viên năm cuối chuyên ngành Công nghệ thông tin tại Đại học Thủ Dầu Một, định hướng chuyên sâu về phát triển ứng dụng di động.
            </p>
            <p className="about-paragraph">
              Sở hữu niềm đam mê lớn với lập trình di động đa nền tảng, mình tập trung nghiên cứu và làm chủ bộ đôi công nghệ mạnh mẽ: **React Native / Expo** và **Flutter / Dart**. Bên cạnh đó, mình cũng tích lũy nhiều kinh nghiệm tích hợp các giải pháp backend đám mây như **Supabase** và **Firebase**, cũng như tích hợp các tính năng thông minh bằng **AI APIs** để mô phỏng các bài toán thực tiễn.
            </p>
            <p className="about-paragraph">
              Với phương châm đặt trải nghiệm người dùng làm giá trị cốt lõi, mình luôn hướng tới việc viết mã nguồn sạch, tối ưu hóa hiệu năng ứng dụng di động và thiết kế giao diện hiện đại, trực quan nhất.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card glass-panel">
                <div className="value-icon-wrapper">
                  {val.icon}
                </div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-description">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
