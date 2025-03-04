import React from 'react';
import "./Styles/ProductCard.css"

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;