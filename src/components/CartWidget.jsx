// src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
      <span role="img" aria-label="Carrito" style={{ fontSize: '1.5rem' }}>🛒</span>
      <span style={{ marginLeft: '5px', fontWeight: 'bold' }}>3</span>
    </div>
  );
};

export default CartWidget;
