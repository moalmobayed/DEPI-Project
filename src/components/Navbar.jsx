import { Navbar as BsNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BsNavbar.Brand as={Link} to="/">
          🌸 Perfume Shop
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav className="ms-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Nav.Link as="button" className="btn btn-outline-light me-2">
                  Sign In
                </Nav.Link>
              </SignInButton>
              <SignUpButton mode="modal">
                <Nav.Link as="button" className="btn btn-light">
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
