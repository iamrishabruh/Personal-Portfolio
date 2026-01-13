import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Diatrend',
    duration: 'Dec 2024 - May 2025',
    description: 'Designed and implemented an AI-driven CGM trajectory prediction system using PyTorch, extracting advanced temporal and clinical features from continuous glucose monitoring data to enable proactive diabetes management. Built and evaluated multiple state-of-the-art model architectures—including TabTransformer, Graph Neural Networks, and attention-based MLPs—with rigorous temporal cross-validation, robustness testing, and clinical-significance analysis. Deployed a FastAPI inference service and an interactive Streamlit dashboard to support real-time predictions, visualization, and experimentation, bridging research-grade models with deployable healthcare AI systems.',
    sourceCode: 'https://github.com/iamrishabruh/Diatrend-ML',
    stack: ['Python', 'PyTorch', 'FastAPI', 'Streamlit', 'TabTransformer', 'Graph Neural Networks']
  },
  {
    name: 'Nexus Lite',
    duration: 'Dec 2024 - May 2025',
    description: 'Built a cross-platform mobile health-tracking application using React Native (Expo) and FastAPI, enabling users to securely log and manage daily health metrics across iOS and Android from a single codebase. Designed and implemented a backend architecture with Python (FastAPI) and SQL, including user authentication, structured health data storage, and secure API endpoints for client-server communication. Applied software engineering best practices including hashed credential storage, HTTPS-based API communication, Git-based version control, modular architecture, and automated testing to ensure security, scalability, and maintainability.',
    sourceCode: 'https://github.com/iamrishabruh/Nexus-Lite',
    stack: ['React Native', 'Expo', 'FastAPI', 'Python', 'SQL']
  },
  {
    name: 'Bennington',
    duration: 'Dec 2024 - May 2025',
    description: 'Built a production-ready stock backtesting and ML trading platform in Python, integrating historical market data ingestion, realistic trade execution logic, and LSTM-based time-series forecasting to evaluate and compare trading strategies. Designed an interactive Streamlit application that allows users to fetch market data, train models, and run backtests on demand, surfacing performance metrics and visualizations in real time. Containerized the full system with Docker and deployed it to Google Cloud Run, implementing secure environment-based configuration, API key management, and scalable service deployment practices.',
    sourceCode: 'https://github.com/iamrishabruh/Bennington',
    stack: ['Python', 'LSTM', 'Streamlit', 'Docker', 'Google Cloud Run']
  },
  {
    name: 'Differential Learning',
    duration: 'Aug 2024 - Dec 2024',
    description: 'Built a federated learning simulation framework in Python/TensorFlow that trains an EHR classification model across multiple clients while preserving data privacy using differential privacy with per-example gradient clipping and a custom DPAdam optimizer. Implemented robust client update aggregation using gradient clustering techniques, and evaluated system behavior through accuracy–privacy (ε) trade-off analysis, ROC curves, and comparative performance metrics. Developed an interactive Streamlit interface to configure federated training parameters and visualize model performance and resource consumption, enabling reproducible experimentation and system-level analysis.',
    sourceCode: 'https://github.com/iamrishabruh/Differential-Learning',
    stack: ['Python', 'TensorFlow', 'Federated Learning', 'Differential Privacy', 'Streamlit']
  },
  {
    name: 'Drug-Interaction-Checker',
    duration: 'Jun 2023 - Sep 2023',
    description: 'Designed and built a Swift / SwiftUI proof-of-concept drug interaction feature for a large-scale iOS healthcare application, integrating external clinical APIs to surface multi-drug interaction risks and improve patient safety. Implemented a clean, modular iOS architecture with dedicated UI, networking, and data layers, including robust error handling, real-time API fetching, and data modeling aligned with enterprise coding standards. Developed and validated the feature using XCTest unit and UI tests, Git-based version control, and CI workflows, ensuring reliability, maintainability, and production-ready engineering practices in a regulated healthcare environment.',
    sourceCode: 'https://github.com/iamrishabruh/Drug-Interaction-Checker',
    stack: ['Swift', 'SwiftUI', 'XCTest', 'iOS']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-header">
                <h3 className="project-title">{project.name}</h3>
                <span className="project-duration">{project.duration}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="project-links">
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 