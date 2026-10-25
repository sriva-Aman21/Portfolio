import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section className="teams" id="teams">
      <div className="max-width">
        <h2 className="title">Education & Certifications</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', marginTop: '20px' }}>
          
          {/* Formal Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <GraduationCap size={26} color="crimson" />
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff' }}>Academic Background</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {education.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    background: '#222',
                    padding: '24px',
                    borderRadius: '8px',
                    borderLeft: '4px solid crimson',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#fff' }}>{item.degree}</h4>
                    <span style={{ 
                      background: 'rgba(220, 20, 60, 0.2)', 
                      color: '#ff4d6d', 
                      fontSize: '12px', 
                      fontWeight: 600, 
                      padding: '4px 8px', 
                      borderRadius: '4px' 
                    }}>
                      {item.score}
                    </span>
                  </div>
                  
                  <div style={{ fontSize: '14px', color: '#ccc', marginTop: '6px' }}>{item.institution}</div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} /> {item.period}
                  </div>
                  <p style={{ fontSize: '13px', color: '#aaa', marginTop: '10px', lineHeight: '1.5' }}>
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Certifications Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Award size={26} color="crimson" />
              <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#fff' }}>Licenses & Certifications</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  style={{
                    background: '#222',
                    padding: '16px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle2 size={18} color="crimson" />
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>{cert.name}</div>
                      <div style={{ fontSize: '13px', color: '#888' }}>{cert.issuer}</div>
                    </div>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    background: '#333',
                    color: '#ddd',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;