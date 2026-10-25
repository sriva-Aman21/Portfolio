import React from 'react';
import { 
  TrendingUp, 
  Truck, 
  Medal, 
  Code, 
  ExternalLink, 
  BookOpen, 
  Layout, 
  Database 
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
        <div className="serv-content">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code;

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
                    {/* GitHub / Source Code Button */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code size={15} />
                        <span>Code</span>
                      </a>
                    )}

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

                    {/* Google Colab Notebook Link (if applicable) */}
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