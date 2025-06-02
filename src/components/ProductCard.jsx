// src/components/ProductCard.jsx
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} />
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default ProductCard;
