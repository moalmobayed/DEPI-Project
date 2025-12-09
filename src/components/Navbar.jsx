import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { Navbar as BsNavbar, Container, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <BsNavbar
      style={{
        backgroundColor: "#F9F8F6",
        borderBottom: "2px solid #C9B59C",
      }}
      expand="lg"
      sticky="top"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logo.png"
            alt="Scentora Logo"
            width="70"
            height="70"
            className="me-2"
          />
          <span
            style={{ color: "#C9B59C", fontWeight: "bold", fontSize: "1.8rem" }}
          >
            Scentora
          </span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Nav.Link as={Link} to="/" className="custom-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="custom-nav-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="custom-nav-link">
              About
            </Nav.Link>
          </Nav>

          <Nav className="custom-nav-links">
            <Nav.Link
              as={Link}
              to="/cart"
              className="no-underline position-relative"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.7rem" }}
                >
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>

          <Nav className="ms-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Nav.Link
                  as="button"
                  className="btn btn-outline-light custom-nav-link me-2"
                >
                  Sign In
                </Nav.Link>
              </SignInButton>
              <SignUpButton mode="modal">
                <Nav.Link as="button" className="btn btn-light custom-nav-link">
                  Sign Up
                </Nav.Link>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
