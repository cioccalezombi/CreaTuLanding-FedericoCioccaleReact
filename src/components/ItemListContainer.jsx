// src/components/ItemListContainer.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ItemListContainer.css';

const products = [
  {
    title: 'Seal',
    image: 'https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals...'
  },
  {
    title: 'Product 2',
    image: 'https://via.placeholder.com/250x350?text=Producto+2',
    description: 'Descripción del producto 2.'
  },
  {
    title: 'Product 3',
    image: 'https://via.placeholder.com/250x350?text=Producto+3',
    description: 'Descripción del producto 3.'
  },
  {
    title: 'Product 4',
    image: 'https://via.placeholder.com/250x350?text=Producto+4',
    description: 'Descripción del producto 4.'
  },
  {
    title: 'Product 5',
    image: 'https://via.placeholder.com/250x350?text=Producto+5',
    description: 'Descripción del producto 5.'
  },
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
