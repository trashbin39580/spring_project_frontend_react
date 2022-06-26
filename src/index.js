import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CartProvider>
      <App />     
    </CartProvider>
  </AuthProvider>
);