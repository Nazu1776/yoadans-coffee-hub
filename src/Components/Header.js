import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>YOADAN's Coffee Hub</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#menu">Menu</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

