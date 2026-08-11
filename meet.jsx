import React from 'react';

/**
 * @typedef {Object} MemberCardProps
 * @property {string} photoUrl - The URL image string for the intern profile photo.
 * @property {string} name - Full name of the intern.
 * @property {string} domain - Technical domain/field of the internship.
 * @property {string} linkedIn - Direct LinkedIn profile URL.
 */

/**
 * MemberCard Component
 * @param {MemberCardProps} props
 */
export const MemberCard = ({ photoUrl, name, domain, linkedIn }) => {
  return (
    <div style={cardStyle}>
      <img src={photoUrl} alt={name} style={imageStyle} />
      <h3 style={{ margin: '10px 0 5px 0', color: '#0f172a' }}>{name}</h3>
      <p style={{ margin: '0 0 12px 0', color: '#028090', fontWeight: 'bold' }}>{domain}</p>
      <a 
        href={linkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkStyle}
      >
        View LinkedIn
      </a>
    </div>
  );
};

export const MeetTheInterns = () => {
  const interns = [
    { id: 1, name: "Ahmar Hayat", domain: "AI & Machine Learning", photoUrl: "https://i.pravatar.cc/150?img=12", linkedIn: "https://linkedin.com" },
    { id: 2, name: "Bilal Ahmed", domain: "Full-Stack Web Dev", photoUrl: "https://i.pravatar.cc/150?img=11", linkedIn: "https://linkedin.com" },
    { id: 3, name: "Zainab Bibi", domain: "Cybersecurity", photoUrl: "https://i.pravatar.cc/150?img=5", linkedIn: "https://linkedin.com" },
    { id: 4, name: "Hamza Khan", domain: "Cloud & DevOps", photoUrl: "https://i.pravatar.cc/150?img=3", linkedIn: "https://linkedin.com" },
    { id: 5, name: "Sara Malik", domain: "UI/UX Product Design", photoUrl: "https://i.pravatar.cc/150?img=9", linkedIn: "https://linkedin.com" },
    { id: 6, name: "Usman Ali", domain: "Data Analytics", photoUrl: "https://i.pravatar.cc/150?img=8", linkedIn: "https://linkedin.com" }
  ];

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f8fafc' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0f172a' }}>Meet the M-Tech Interns</h2>
      <div style={gridStyle}>
        {interns.map((intern) => (
          <MemberCard
            key={intern.id}
            photoUrl={intern.photoUrl}
            name={intern.name}
            domain={intern.domain}
            linkedIn={intern.linkedIn}
          />
        ))}
      </div>
    </section>
  );
};

// Inline Styles
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1.5rem',
  maxWidth: '1000px',
  margin: '0 auto'
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '1.5rem',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #e2e8f0'
};

const imageStyle = {
  width: '90px',
  height: '90px',
  borderRadius: '50%',
  objectFit: 'cover'
};

const linkStyle = {
  display: 'inline-block',
  padding: '6px 12px',
  backgroundColor: '#028090',
  color: '#ffffff',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 'bold'
};