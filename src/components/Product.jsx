import React from "react";
import '../pages/Products.css';

export default function Product({ title, images, discount }) {
  return (
    <div className="product-card">
      
      <div className="product-images">
        {images.map((img, idx) => (
          <a key={idx} href={img} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={title} className="product-img" />
          </a>
        ))}
      </div>
      {discount && <p className="product-discount">{discount}% OFF</p>}
    </div>
  
  );
}
