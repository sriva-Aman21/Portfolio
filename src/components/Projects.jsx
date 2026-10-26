import React from 'react';
import { 
  TrendingUp, 
  Truck, 
  Medal, 
  Code, 
  ExternalLink, 
  BookOpen, 
  Layout, 
  Database,
  Lock,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon names from data to Lucide icons
const iconMap = {
  TrendingUp: TrendingUp,
  Truck: Truck,
  Medal: Medal,
  BookOpen: BookOpen,
  Layout: Layout,
  Database: Database,
  Code: Code
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Portfolio Projects</h2>

        {/* --- Streamlit Sleep Advisory Banner --- */}
        <div className="streamlit-info-banner">
          <Zap size={18} className="banner-icon" />
          <p>
            <strong>Live Demo Notice:</strong> Free cloud containers enter sleep mode after inactivity. If an app is asleep, click <strong>"Yes, get this app back up!"</strong> to wake the live container (~15–20s).
          </p>
        </div>

        <div className="serv-content">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code;

            // Check if this project is one of your private repos or marked as private
            const isPrivateRepo = 
              project.isPrivate || 
              project.githubUrl === '#' || 
              !project.githubUrl ||
              project.title.toLowerCase().includes('olympic') ||
              project.title.toLowerCase().includes('nassau') ||
              project.title.toLowerCase().includes('apl') ||
              project.title.toLowerCase().includes('supply chain');

            return (
              <div className="card" key={project.id}>
                <div>
                  <div className="icon-box">
                    <IconComponent size={36} />
                  </div>
                  <div className="text">{project.title}</div>
                  <p>{project.description}</p>
                </div>

                <div>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {/* Live Deployed Streamlit / Web App Button */}
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-btn"
                      >
                        <ExternalLink size={15} />
                        <span>Live Dashboard</span>
                      </a>
                    )}

                    {/* Google Colab Link (if available) */}
                    {project.colabUrl && (
                      <a
                        href={project.colabUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="colab-btn"
                      >
                        <BookOpen size={15} />
                        <span>Colab</span>
                      </a>
                    )}

                    {/* GitHub Code vs Private Repo Access Button */}
                    {isPrivateRepo ? (
                      <a
                        href={`mailto:aman21sriva@gmail.com?subject=Source%20Code%20Access%20Request%20-%20${encodeURIComponent(project.title)}`}
                        className="private-btn"
                        title="Repository is private. Click to request direct collaborator access."
                      >
                        <Lock size={14} />
                        <span>Private Repo • Access on Request</span>
                      </a>
                    ) : (
                      project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code size={15} />
                          <span>Code</span>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;