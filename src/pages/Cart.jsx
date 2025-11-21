import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5 text-center" style={{ minHeight: "60vh" }}>
        <ShoppingBag size={80} className="text-muted mb-3" />
        <h2>Your Cart is Empty</h2>
        <p className="text-muted">Add some perfumes to get started!</p>
        <Link to="/products">
          <Button variant="dark" size="lg" className="mt-3">
            Shop Perfumes
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-5 mb-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <Row>
        {/* Cart Items */}
        <Col lg={8}>
          {cartItems.map((item) => (
            <Card
              key={`${item.id}-${item.selectedSize}`}
              className="mb-3 border-0 shadow-sm"
            >
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col xs={9} md={4}>
                    <h6 className="mb-1">{item.name}</h6>
                    <p className="text-muted small mb-1">{item.brand}</p>
                    <p className="small mb-0">Size: {item.selectedSize}</p>
                  </Col>
                  <Col xs={6} md={2} className="mt-2 mt-md-0">
                    <strong>${item.price}</strong>
                  </Col>
                  <Col xs={6} md={3} className="mt-2 mt-md-0">
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity - 1
                          )
                        }
                      >
                        <Minus size={16} />
                      </Button>
                      <Form.Control
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            parseInt(e.target.value) || 1
                          )
                        }
                        style={{ width: "60px", textAlign: "center" }}
                        min="1"
                      />
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.selectedSize,
                            item.quantity + 1
                          )
                        }
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </Col>
                  <Col xs={12} md={1} className="text-end mt-2 mt-md-0">
                    <Button
                      variant="link"
                      className="text-danger p-0"
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}

          <Button variant="outline-danger" onClick={clearCart} className="mt-2">
            Clear Cart
          </Button>
        </Col>

        {/* Order Summary */}
        <Col lg={4}>
          <Card
            className="border-0 shadow-sm sticky-top"
            style={{ top: "100px" }}
          >
            <Card.Body>
              <h5 className="mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>

              {subtotal < 100 && (
                <Alert variant="info" className="small">
                  Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
                </Alert>
              )}

              <Button variant="dark" className="w-100 mb-2" size="lg">
                Proceed to Checkout
              </Button>

              <Link to="/products">
                <Button variant="outline-secondary" className="w-100">
                  Continue Shopping
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
