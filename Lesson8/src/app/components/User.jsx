import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const User = props => {
  const { id, userEmail, userPhone, userWebsite, userName } = props;
  return (
    <Card className="my-3">
      <Card.Header as={Link} to={`/users/${id}`}>
        {userName}
      </Card.Header>
      <Card.Body>
        <Card.Text>{userName}</Card.Text>
        <Card.Text>{userEmail}</Card.Text>
        <Card.Text>{userPhone}</Card.Text>
        <Card.Text>{userWebsite}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
