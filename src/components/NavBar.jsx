// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        background: '#f8f9fa',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      {/* Contenedor interno centrado */}
      <div
        style={{
          maxWidth: '2000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          boxSizing: 'border-box',
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>MnW</h2>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="#">Inicio</a>
          <a href="#">Productos</a>
          <a href="#">Contacto</a>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
