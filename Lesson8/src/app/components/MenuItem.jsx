import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const MenuItem = props => {
  return (
    <Nav.Link
      className={props.active ? "nav-item active" : "nav-item"}
      as={Link}
      to={props.href}
    >
      {props.children}
    </Nav.Link>
  );
};

export default MenuItem;
