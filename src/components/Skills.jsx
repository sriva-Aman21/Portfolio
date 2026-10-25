import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skillCategories, skills } = portfolioData;

  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My Skills</h2>
        <div className="skills-content">
          
          {/* Left Column: Progress summary */}
          <div className="column left">
            <div className="text">Technical Proficiencies & Analytical Expertise</div>
            <p>
              Strong background in developing scalable ETL pipelines, exploratory data analysis, and building business intelligence dashboards. Skilled in transforming complex datasets into clear, data-driven decisions using industry-standard tools.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
              {skillCategories.map((cat, idx) => (
                <div key={idx} style={{ background: '#f5f5f5', padding: '15px', borderRadius: '6px' }}>
                  <div style={{ fontWeight: 600, color: 'crimson', fontSize: '14px', marginBottom: '8px' }}>
                    {cat.category}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        style={{
                          background: '#fff',
                          border: '1px solid #ddd',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          color: '#333',
                          fontWeight: 500
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Proficiency Levels */}
          <div className="column right">
            {skills.map((skill, index) => (
              <div className="bars" key={index}>
                <div className="info">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="line">
                  <div style={{ width: skill.level, height: '100%', background: 'crimson', borderRadius: '3px' }}></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;