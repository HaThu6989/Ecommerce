import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import ProductDetails from "./components/ProductDetails";
import ProductList from './components/ProductList'
import User from './components/User'
// import { Router } from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';

import Cart from "./components/Cart";

function App() {
  const [user, setUser] = useState({
    name: { first: 'John', last: 'Doe' },
    email: 'johndoe@example.com',
  });

  function handleSave(userData) {
    setUser({
      name: { first: userData.firstName, last: userData.lastName },
      email: userData.newEmail,
    });
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/user" element={<User name={user.name} email={user.email} onSave={handleSave} />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

