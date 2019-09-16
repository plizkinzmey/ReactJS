import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menu = props => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as = {Link} to = "/">{props.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">{props.children}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
