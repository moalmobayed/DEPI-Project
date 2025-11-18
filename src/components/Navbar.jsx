import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <BsNavbar 
      style={{ 
        backgroundColor: '#F9F8F6', 
        borderBottom: '2px solid #C9B59C'
      }} 
      expand="lg" 
      sticky="top"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="/logo.png" 
            alt="Perfume Shop Logo"
            width="70"
            height="70"
            className="me-2"
          />
          <span style={{ color: '#C9B59C', fontWeight: 'bold', fontSize: '1.8rem' }}>
            Perfume Shop
          </span>
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Nav.Link 
              as={Link} 
              to="/"
              className="custom-nav-link"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/products"
              className="custom-nav-link"
            >
              Products
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about"
              className="custom-nav-link"
            >
              About
            </Nav.Link>
          </Nav>
          
          <Nav className="custom-nav-links">
            <Nav.Link 
              as={Link} 
              to="/cart"
              className="no-underline"  
            >
              🛒 Cart
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/login"
              className="no-underline"   
            >
              👤 Login
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;