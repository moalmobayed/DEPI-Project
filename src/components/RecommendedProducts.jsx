import { useEffect, useState } from "react";
import '../pages/Products.css';

function RecommendedProducts({ currentId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products/category/fragrances");
        const data = await res.json();
        
      
        const filtered = data.products.filter(p => p.id !== Number(currentId));

      
        setProducts(filtered.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    }

    fetchProducts();
  }, [currentId]);

  return (
    <div className="recommended-section">
      <h3 className="rec-title">Recommended Products</h3>
      <div className="rec-grid">
        {products.map((product) => (
          <div className="rec-card" key={product.id}>
            <img
              src={product.thumbnail || product.images?.[0] || "https://via.placeholder.com/150"}
              alt={product.title}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
