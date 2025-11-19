import { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductList from "../components/Products/ProductList"; 
import Sidebar from "../components/Products/Sidebar";         
import "../components/Products/Card.css";
import "../components/Products/Sidebar.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/fragrances")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <Container className="mt-5" style={{ marginLeft: "270px" }}>
        <h1 className="text-center mb-4">Perfume Collection</h1>

        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </Container>
    </>
  );
}
