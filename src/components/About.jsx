import React from 'react';
import { Cpu, Layers, Users, Sparkles } from 'lucide-react';
import './About.css';

export default function About() {
  const values = [
    {
      icon: <Cpu size={24} className="value-icon" />,
      title: 'IoT & Phần cứng',
      description: 'Lập trình nhúng và thiết kế hệ thống phần cứng thông minh kết hợp ứng dụng Web.'
    },
    {
      icon: <Layers size={24} className="value-icon" />,
      title: 'Tối ưu Trải nghiệm',
      description: 'Chú trọng vào hiệu năng cực cao, giao diện trực quan và khả năng responsive mượt mà.'
    },
    {
      icon: <Users size={24} className="value-icon" />,
      title: 'Làm việc Nhóm',
      description: 'Kỹ năng giao tiếp và cộng tác hiệu quả trong môi trường làm việc Agile linh hoạt.'
    },
    {
      icon: <Sparkles size={24} className="value-icon" />,
      title: 'Sáng tạo Không ngừng',
      description: 'Đam mê học hỏi các công nghệ mới và tìm tòi các giải pháp sáng tạo tối ưu nhất.'
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
            Hành trình theo đuổi đam mê công nghệ và định hướng phát triển
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text-container glass-panel">
            <h3 className="about-heading">Đam mê kết nối thế giới ảo và thế giới thực</h3>
            <p className="about-paragraph">
              Xin chào! Mình là <strong>Louis V</strong>, một nhà phát triển phần mềm và kỹ sư IoT đam mê kiến tạo giải pháp công nghệ. Mình bắt đầu hành trình lập trình từ sự tò mò về cách các trang web hoạt động và cách các thiết bị phần cứng có thể giao tiếp với nhau qua internet.
            </p>
            <p className="about-paragraph">
              Sở hữu nền tảng vững chắc về phát triển Web (ReactJS, NodeJS) kết hợp cùng kinh nghiệm thiết kế hệ thống IoT (ESP32, Raspberry Pi, cảm biến và các giao thức MQTT/HTTP), mình luôn mong muốn xây dựng các hệ sinh thái hoàn chỉnh từ thiết bị vật lý đến giao diện quản lý trên Web một cách mượt mà và trực quan nhất.
            </p>
            <p className="about-paragraph">
              Với phương châm <em>"Biến những điều phức tạp thành trải nghiệm đơn giản"</em>, mình luôn đặt sự tinh tế trong thiết kế và sự tối ưu trong hiệu năng làm kim chỉ nam cho mọi dòng code.
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
