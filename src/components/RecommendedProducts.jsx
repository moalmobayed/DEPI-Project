import { useEffect, useState } from "react";
import "../pages/Products.css";
import productsData from "../data/products.json";

function RecommendedProducts({ currentId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filtered = productsData.perfumes.filter(
      (p) => p.id !== Number(currentId)
    );
    setProducts(filtered.slice(0, 4));
  }, [currentId]);

  return (
    <div className="recommended-section">
      <h3 className="rec-title">Recommended Products</h3>
      <div className="rec-grid">
        {products.map((product) => (
          <div className="rec-card" key={product.id}>
            <img
              src={product.images?.[0] || "https://via.placeholder.com/150"}
              alt={product.name}
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
