import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Post = props => {
  const { id, postBody, postTitle } = props;
  return (
    <Card className="my-3">
      <Card.Header as={Link} to={`/posts/${id}`}>
        {postTitle}
      </Card.Header>
      <Card.Body>
        <Card.Text>{postBody}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
