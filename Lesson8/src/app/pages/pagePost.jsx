import React, { useState, useEffect } from "react";
import axios from 'axios';
import Post from '../components/Post';

const pagePost = props => {
  const [post, setPost] = useState ({});

  useEffect(() => {
    axios
      .get(
        `https://reactjs-9b967.firebaseio.com/posts/${props.match.params.postId}.json`
      )
      .then(res => {
        const post = res.data;
        setPost(post);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return <div>{post ? <Post {...post} /> : null}</div>;
};

export default pagePost;
