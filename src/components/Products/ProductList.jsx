import { Row, Col, Card, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Card.css";

export default function ProductList({ products }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Row className="g-4 pb-4">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card className="perfume-card position-relative shadow-sm border-0">
              {product.discount > 0 && (
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-0 m-2"
                  style={{ zIndex: 2 }}
                >
                  {product.discount}% OFF
                </Badge>
              )}
              {product.isNew && (
                <Badge
                  bg="success"
                  className="position-absolute top-0 end-0 m-2"
                  style={{ zIndex: 2 }}
                >
                  NEW
                </Badge>
              )}
              <Card.Img
                src={product.images[0]}
                alt={product.name}
                className="perfume-img"
              />
              <div className="info-overlay">
                <h6 className="product-title">{product.name}</h6>
                <p className="product-brand text-muted small">
                  {product.brand}
                </p>
                <div className="d-flex align-items-center gap-2">
                  {product.originalPrice > product.price && (
                    <span className="text-decoration-line-through text-muted small">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="product-price fw-bold">
                    ${product.price}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-1 mt-1">
                  <span className="text-warning">★</span>
                  <span className="small">
                    {product.rating} ({product.reviewCount})
                  </span>
                </div>
              </div>
              <Button
                className="cart-btn"
                variant="dark"
                size="sm"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <ShoppingCart size={18} />
              </Button>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}
