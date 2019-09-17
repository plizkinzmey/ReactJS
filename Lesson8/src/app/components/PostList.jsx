import React, { useState, useEffect } from "react";
import Post from "./Post";
import { Form, Card, Button } from "react-bootstrap";
import axios from "axios";

const PostList = props => {
  const userId = 1;
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("https://reactjs-9b967.firebaseio.com/posts.json").then(res => {
      const postData = res.data;
      const posts = [];
      for (const key in postData) {
        posts.push({
          id: key,
          userId: postData[key].userId,
          postTitle: postData[key].postTitle,
          postBody: postData[key].postBody
        });
      }
      setPostList(posts);
    });
  }, []);

  const postTitleChangeHandler = event => {
    setPostTitle(event.target.value);
  };
  const postBodyChangeHandler = event => {
    setPostBody(event.target.value);
  };

  const postAddHandler = () => {
    if (postTitle != "" && postBody != "") {
      axios
        .post("https://reactjs-9b967.firebaseio.com/posts.json", {
          userId,
          postTitle,
          postBody
        })
        .then(res => {})
        .catch(err => {
          console.log(err);
        });
    }
  };
  const mappedPostList = postList.map(post => {
    return <Post key={post.id} {...post} />;
  });

  return (
    <div>
      <h1>Посты</h1>
      <Card className="card my-3 px-3 py-2">
        <Form>
          <Form.Group controlId="postHeaderInput">
            <Form.Label>Заголовок поста</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите заголовок поста"
              onChange={postTitleChangeHandler}
              value={postTitle}
            />
          </Form.Group>
          <Form.Group controlId="postTextarea">
            <Form.Label>Пост</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows="3"
              placeholder="Введите содержимое поста"
              onChange={postBodyChangeHandler}
              value={postBody}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary float-right"
            onClick={postAddHandler}
          >
            Опубликовать пост
          </Button>
        </Form>
      </Card>
      {mappedPostList}
    </div>
  );
};

export default PostList;
