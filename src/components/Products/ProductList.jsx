import { Row, Col, Card } from "react-bootstrap";
import "./Card.css";

export default function ProductList({ products }) {
  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card className="perfume-card position-relative shadow-sm border-0">
            <Card.Img
              src={product.thumbnail}
              alt={product.title}
              className="perfume-img"
            />
            <div className="info-overlay">
              <h6 className="product-title">{product.title}</h6>
              <p className="product-price">${product.price}</p>
            </div>
            <button className="cart-btn">
              <i className="bi bi-cart"></i>
            </button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
