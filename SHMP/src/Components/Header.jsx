import React from 'react';
import "./Styles/Header.css"
function Header() {
  return (
    <header className="app-header">
      <nav>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;