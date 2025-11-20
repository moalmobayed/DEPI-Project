import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <img 
                src="/logo.png" 
                alt="Perfume Shop Logo"
                width="60"
                height="60"
                className="me-2"
              />
              <h5 className="mb-0">Perfume Shop</h5>
            </div>
            <p className="footer-text">
              Your destination for luxury fragrances from around the world.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="footer-link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled footer-contact">
              <li className="contact-item">
                <span className="contact-icon">✉</span>
                info@perfumeshop.com
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                +1 234 567 8900
              </li>
              <li className="contact-item">
                <span className="contact-icon">📍</span>
                123 Fragrance Avenue, NY
              </li>
            </ul>
            
            <div className="social-icons mt-3">
              <span className="social-icon">f</span>
              <span className="social-icon">in</span>
              <span className="social-icon">t</span>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="copyright mb-0">
              © {new Date().getFullYear()} Perfume Shop. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;