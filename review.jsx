import React from 'react';

/**
 * @typedef {Object} ReviewCardProps
 * @property {string} name - Name of the reviewer.
 * @property {number} rating - Integer rating value (1 to 5).
 * @property {string} comment - Text review content.
 */

/**
 * ReviewCard Component
 * @param {ReviewCardProps} props
 */
export const ReviewCard = ({ name, rating, comment }) => {
  // Generate star string using Array(n).fill()
  const stars = Array(rating).fill("⭐").join("");

  return (
    <div style={reviewCardStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ margin: 0, color: '#0f172a' }}>{name}</h4>
        <span style={{ fontSize: '1rem' }}>{stars}</span>
      </div>
      <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '10px', lineHeight: '1.4' }}>
        "{comment}"
      </p>
    </div>
  );
};

export const ReviewList = () => {
  const reviews = [
    { id: 1, name: "Aamir Sohail", rating: 5, comment: "The M-Tech program provided incredible hands-on experience with live industrial workflows." },
    { id: 2, name: "Fatima Noor", rating: 4, comment: "Great mentorship and structured assignments. Learned React and modern JS concepts rapidly." },
    { id: 3, name: "Tariq Mahmood", rating: 5, comment: "Building real production projects for our engineering portfolio was the highlight for me." },
    { id: 4, name: "Sana Ahmed", rating: 4, comment: "Excellent peer collaborative environment and supportive domain technical leads." },
    { id: 5, name: "Kamran Shah", rating: 5, comment: "Highly recommend to any AI and CS students looking to transition into full-stack development." }
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2 style={{ textAlign: 'center', color: '#0f172a' }}>Internship Reviews (5)</h2>
      {reviews.map((rev) => (
        <ReviewCard
          key={rev.id}
          name={rev.name}
          rating={rev.rating}
          comment={rev.comment}
        />
      ))}
    </div>
  );
};

const reviewCardStyle = {
  backgroundColor: '#ffffff',
  padding: '1.2rem',
  borderRadius: '8px',
  marginBottom: '1rem',
  borderLeft: '4px solid #028090',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
};