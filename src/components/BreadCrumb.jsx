import React from 'react';
import '../pages/Products.css';

export default function Breadcrumb({ category, product }) {
  return (
    <nav className="breadcrumb">
      <span className="breadcrumb-item">{category}</span>
      {product && <span className="breadcrumb-item"> {product}</span>}
    </nav>
  );
}
