// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a MagicNoWaifu! Descubre nuestras catálogo" />
    </>
  );
}

export default App;