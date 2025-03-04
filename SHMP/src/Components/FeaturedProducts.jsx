import React from 'react';
import ProductCard from './ProductCard'; // Assuming you have this component
import './Styles/FeaturedProducts.css';

const featuredProducts = [
  { id: 1, name: 'Smart Watch', price: 249, imageUrl: "", description: 'Stay connected with our advanced smartwatch.' },
  { id: 2, name: 'Wireless Headphones', price: 129, imageUrl: 'https://via.placeholder.com/250', description: 'Enjoy immersive audio with our wireless headphones.' },
  { id: 3, name: 'Portable Speaker', price: 89, imageUrl: 'https://via.placeholder.com/250', description: 'Take your music anywhere with our portable speaker.' },
];

function FeaturedProducts() {
  return (
    <div className="featured-products">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FeaturedProducts;