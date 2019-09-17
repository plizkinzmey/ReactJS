import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Comment = props => {
  const { id, commentEmail, commentBody, commentHeader } = props;
  return (
    <Card className="my-3">
      <Card.Header as={Link} to={`/comments/${id}`}>
        {commentHeader}
      </Card.Header>
      <Card.Body>
        <Card.Text>{commentEmail}</Card.Text>
        <Card.Text>{commentBody}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
