import React, { Component } from "react";
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
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">
    //     <Link to="/" className="navbar-brand">
    //       {props.brand}
    //     </Link>
    //     <div className="collapse navbar-collapse">
    //       <ul className="navbar-nav">{props.children}</ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Menu;
