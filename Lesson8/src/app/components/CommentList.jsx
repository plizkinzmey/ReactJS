import Comment from "./Comment";
import React, { Component, useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const CommentList = props => {
  const PostId = 1;
  const [commentHeader, setCommentHeader] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [commentEmail, setCommentEmail] = useState("");

  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactjs-9b967.firebaseio.com/comments.json")
      .then(res => {
        const commentData = res.data;
        const comments = [];
        for (const key in commentData) {
          comments.push({
            id: key,
            commentHeader: commentData[key].commentHeader,
            commentBody: commentData[key].commentBody,
            commentEmail: commentData[key].commentEmail,
            PostId: commentData[key].PostId
          });
        }
        setCommentList(comments);
      });
  }, []);

  const commentHeaderChangeHandler = event => {
    setCommentHeader(event.target.value);
  };
  const commentBodyChangeHandler = event => {
    setCommentBody(event.target.value);
  };
  const commentEmailChangeHandler = event => {
    setCommentEmail(event.target.value);
  };

  const commentAddHandler = () => {
    if (commentHeader != "" && commentEmail != "" && commentBody != "") {
      axios
        .post("https://reactjs-9b967.firebaseio.com/comments.json", {
          commentHeader,
          commentEmail,
          commentBody,
          PostId
        })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    }
  };

  const mappedCommentList = commentList.map(comment => {
    return <Comment key={comment.id} {...comment} />;
  });

  return (
    <div>
      <h1>Комментарии</h1>
      <Card className="card my-3 px-3 py-2">
        <Form>
          <Form.Group controlId="commentHeader">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите заголовок"
              onChange={commentHeaderChangeHandler}
              value={commentHeader}
            />
          </Form.Group>
          <Form.Group controlId="commentEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите email"
              onChange={commentEmailChangeHandler}
              value={commentEmail}
            />
          </Form.Group>
          <Form.Group controlId="commentBody">
            <Form.Label>Комментарий</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите комментарий"
              onChange={commentBodyChangeHandler}
              value={commentBody}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary float-right"
            onClick={commentAddHandler}
          >
            Опубликовать комментарий
          </Button>
        </Form>
      </Card>
      {mappedCommentList}
    </div>
  );
};

export default CommentList;
