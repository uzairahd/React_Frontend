import React, { useState, useEffect } from 'react';
import './Pstyles/Home.css';
import FeaturedProducts from '../Components/FeaturedProducts';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Cart from '../Components/Cart'; // Import the Cart component
import { useNavigate } from 'react-router-dom';

function Home({ user, setUser }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to control cart visibility
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const [cartItemCount, setCartItemCount] = useState(0); // State to track number of items in cart
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      // Calculate total quantity of items
      const itemCount = parsedCart.reduce((total, item) => total + item.quantity, 0);
      setCartItemCount(itemCount);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setShowCart(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignup(false);
    setShowCart(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const handleShopNow = () => {
    navigate('/products');
  };

  const handleBrowseProducts = () => {
    navigate('/products');
  };

  // Function to add item to cart (can be passed to FeaturedProducts)
  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    let updatedCart;
    if (existingItemIndex >= 0) {
      // If item already exists, update quantity
      updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart
      const newItem = { ...product, quantity: 1 };
      updatedCart = [...cartItems, newItem];
    }
    
    setCartItems(updatedCart);
    updateCartCount(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Update cart item count
  const updateCartCount = (items) => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Next Favorite Product</h1>
          <p>Explore a curated selection of high-quality items designed to enhance your lifestyle.</p>
          <button className="shop-now-button" onClick={handleShopNow}>Shop Now</button>
          
          <div className="auth-cart-container">
            {/* Cart Button with item count */}
            <button onClick={handleCartClick} className="cart-button">
              Cart ({cartItemCount})
            </button>
            
            {user ? (
              <button onClick={handleLogout} className="logout-button">Logout</button>
            ) : (
              <>
                <button onClick={handleLoginClick} className="auth-button">Login</button>
                <button onClick={handleSignupClick} className="auth-button">Signup</button>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        {/* Pass addToCart function to FeaturedProducts */}
        <FeaturedProducts addToCart={addToCart} />
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>About Our Brand</h2>
          <p>We believe in delivering exceptional value and quality to our customers. Our products are carefully selected to meet your needs and exceed your expectations.</p>
          <p>Our mission is to provide a seamless shopping experience and build lasting relationships with our customers.</p>
        </div>
      </section>

      <section className="call-to-action">
        <div className="cta-content">
          <h2>Ready to Explore?</h2>
          <p>Browse our collection and find the perfect product for you.</p>
          <button className="browse-button" onClick={handleBrowseProducts}>Browse Products</button>
        </div>
      </section>

      {/* Modal components */}
      {showLogin && <Login setUser={setUser} onClose={handleCloseModal} />}
      {showSignup && <Signup setUser={setUser} onClose={handleCloseModal} />}
      {showCart && (
        <Cart 
          cartItems={cartItems} 
          setCartItems={setCartItems} 
          updateCartCount={updateCartCount} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default Home;