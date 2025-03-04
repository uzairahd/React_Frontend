import React from 'react';
import ProductList from '../Components/ProductList.jsx';
import './Pstyles/Products.css'; // Create this file

const mockProducts = [
  { id: 1, name: 'Laptop', price: 999, imageUrl: 'https://via.placeholder.com/250', description: 'Powerful laptop for work and play.' },
  { id: 2, name: 'Smartphone', price: 699, imageUrl: 'https://via.placeholder.com/250', description: 'Latest smartphone with amazing features.' },
  { id: 3, name: 'Headphones', price: 149, imageUrl: 'https://via.placeholder.com/250', description: 'Noise-cancelling headphones for immersive audio.' },
  { id: 4, name: 'Tablet', price: 349, imageUrl: 'https://via.placeholder.com/250', description: 'Lightweight tablet for entertainment and productivity.' },
  { id: 5, name: 'Camera', price: 799, imageUrl: 'https://via.placeholder.com/250', description: 'High-resolution camera for capturing memories.' },
  { id: 6, name: 'Smart Speaker', price: 99, imageUrl: 'https://via.placeholder.com/250', description: 'Voice-controlled smart speaker for your home.' },
];

function Products() {
  return (
    <div className="products-page">
      <section className="products-header">
        <h1>Our Products</h1>
        <p>Explore our wide range of high-quality products.</p>
      </section>
      <section className="product-list-section">
        <ProductList products={mockProducts} />
      </section>
    </div>
  );
}

export default Products;