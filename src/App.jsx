import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import AchivmentSection from './components/achivment-section/Achivment.jsx';
import ProductsServicesSection from './components/product/Product.jsx';
import FooterSection from './components/Footer/Footer.jsx';
import ProductPage from './components/Pages/ProductPage.jsx';
import AboutPage from './components/Pages/AboutPage.jsx';
import CartPage from './components/Pages/CartPage.jsx';
import AuthPage from './components/Pages/AuthPage.jsx';

const HomePage = () => (
  <>
    <Hero />
    <AchivmentSection />
    <ProductsServicesSection />
  </>
);

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // Calculate cart count from cart items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar 
        cartCount={cartCount} 
        user={user} 
        setUser={setUser} 
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/products"
          element={
            <ProductPage 
              addToCart={addToCart}
              user={user}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/cart" 
          element={
            user ? (
              <CartPage 
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ) : (
              <Navigate to="/auth" state={{ from: '/cart' }} />
            )
          } 
        />
        <Route 
          path="/auth" 
          element={
            user ? <Navigate to="/" /> : <AuthPage setUser={setUser} />
          } 
        />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
};

export default App;