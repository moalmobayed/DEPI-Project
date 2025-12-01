import React from 'react';
import '../pages/Products.css';

export default function PerfumesCategoryNavbar({ products, onSelect }) {
  return (
    <nav className="navbar-products">
      {products.map(product => (
        <button 
          key={product.id} 
          onClick={() => onSelect(product.id)}
          className="navbar-btn"
        >
          {product.brand}
        </button>
      ))}
    </nav>
  );
}
