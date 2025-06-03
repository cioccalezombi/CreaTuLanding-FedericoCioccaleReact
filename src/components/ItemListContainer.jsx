// src/components/ItemListContainer.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ItemListContainer.css';

const products = [
  {
    title: 'Aegis',
    image: '/images/Carta01.png', // Solo la ruta de la imagen
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }, 
  {
    title: 'Alena',
    image: '/images/Carta02.png', // Solo la ruta de la imagen
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Alesha',
    image: '/images/Carta03.png', // Solo la ruta de la imagen
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Arashin',
    image: '/images/Carta04.png', // Solo la ruta de la imagen
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Archfiend of Depravity',
    image: '/images/Carta05.png', // Solo la ruta de la imagen
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
 
];

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="itemlist-section">
      <h3 className="itemlist-title">{greeting}</h3>
      <div className="itemlist-grid-wrapper">
        <div className="itemlist-grid">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemListContainer;
