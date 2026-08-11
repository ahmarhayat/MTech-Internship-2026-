import React from 'react';

/**
 * @typedef {Object} FeatureCardProps
 * @property {string} icon - Emoji or icon string symbol.
 * @property {string} title - Heading title for the feature.
 * @property {string} description - Descriptive text body.
 */

/**
 * FeatureCard Component
 * @param {FeatureCardProps} props
 */
export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div style={featureStyle}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ color: '#0f172a', margin: '0.5rem 0' }}>{title}</h3>
      <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
};

export const Features = () => {
  const featuresData = [
    { id: 1, icon: "👨‍🏫", title: "1-on-1 Mentorship", description: "Direct guidance from senior software engineers and domain experts." },
    { id: 2, icon: "🚀", title: "Live Projects", description: "Build production-ready web and AI applications for your tech portfolio." },
    { id: 3, icon: "🏆", title: "Career Placement", description: "Top performers receive direct job recommendations and official certificates." }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '3rem 1rem' }}>
      <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '2rem' }}>Why Join M-Tech?</h2>
      <div style={featuresGrid}>
        {featuresData.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

const featuresGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  maxWidth: '900px',
  margin: '0 auto'
};

const featureStyle = {
  padding: '1.5rem',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  textAlign: 'center',
  backgroundColor: '#f8fafc'
};