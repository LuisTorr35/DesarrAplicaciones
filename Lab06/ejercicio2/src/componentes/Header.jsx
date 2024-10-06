import React from 'react';
import './Header.css';

const Header = ({ Tienda }) => {
  return (
    <header>
      <h1>{Tienda}</h1>
    </header>
  );
}

export default Header;

