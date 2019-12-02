import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    // bg = "light"
    <Navbar style={{ backgroundColor: "white" }} expand="lg">
      <Navbar.Brand href="home">Habit Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
          <Nav.Link href="generate">Generate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
