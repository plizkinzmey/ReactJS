import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../components/Comment";

const pageComment = props => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://reactjs-9b967.firebaseio.com/comments/${props.match.params.commentId}.json`
      )
      .then(res => {
        const comment = res.data;
        setComment(comment);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div>{comment ? <Comment {...comment} /> : null}</div>;
};

export default pageComment;
