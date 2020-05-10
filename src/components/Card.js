import React from 'react';

export default function Card({ url, name, text }) {
  const image = { backgroundImage: `url(${url})` };
  const cardClasses = url === null ? 'card preloader' : 'card';
  return (
    <div className={cardClasses}>
      <div className="image">
        <div style={image} />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
