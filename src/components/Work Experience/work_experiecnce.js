
import React, { useState, useEffect } from "react";

function WorkExperience() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.experience-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 'exp1',
      title: 'Software Developer Intern',
      company: 'Monkhub Innovations, Gurugram (Onsite)',
      date: 'May 2025 - Present',
      responsibilities: [
        'Developing FEF, an e-commerce website, using Next.js, TypeScript, CSS, and Shadcn UI, with Framer Motion for dynamic animations.',
        'Building role-based access control for admin, customer, and super admin using Node.js, RESTful APIs, and Axios for secure API integrations.',
        'Integrating PostgreSQL for secure data storage, optimizing queries for user management and authentication.',
        'Collaborating with backend developers to ensure UI consistency and performance via code-splitting, lazy loading, and modular design.'
      ]
    },
    {
      id: 'exp2',
      title: 'Software Developer Intern',
      company: 'Damyant Fintech Pvt Limited, Noida (Remote)',
      date: 'Jan 2025 - April 2025',
      responsibilities: [
        'Developed F-Prognos, a stock market strategy platform, using React.js, Redux, CSS, and Material UI for a responsive, modern UI.',
        'Built frontend components for creating and simulating algorithmic trading strategies with real-time backtesting results.',
        'Collaborated with backend engineers using Axios for secure API to enable real-time data fetching.',
        'Ensured UI consistency across devices using code-splitting, and modular design practices.'
      ]
    }
  ];

  return (
    <div className="work-experience-section" id="experience">
      <div className="animated-bg">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>
      
      <div className="container">
        <div className="title-container">
          <h1 className="section-title">
            MY <span className="highlight">WORK EXPERIENCE</span>
          </h1>
          <div className="title-underline"></div>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              id={exp.id}
              className={`experience-card ${isVisible[exp.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-header">
                  <div className="role-badge">
                    <span className="badge-dot"></span>
                    <h2 className="card-title">{exp.title}</h2>
                  </div>
                  <div className="card-meta">
                    <p className="card-subtitle">{exp.company}</p>
                    <p className="card-date">{exp.date}</p>
                  </div>
                </div>
                
                <div className="card-body">
                  <ul className="card-list">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li 
                        key={idx} 
                        className="list-item"
                        style={{ animationDelay: `${(index * 0.3) + (idx * 0.1) + 0.5}s` }}
                      >
                        <span className="bullet-point"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-shine"></div>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}

export default WorkExperience;