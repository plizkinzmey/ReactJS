import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";

const pageUser = props => {
  const [user, setUser] = useState ({});

  useEffect(() => {
    axios
      .get(
        `https://reactjs-9b967.firebaseio.com/users/${props.match.params.userId}.json`
      )
      .then(res => {
        const user = res.data;
        setUser(user);
      }).catch(err => {
        console.log(err);
      });
  }, []);

  return <div>{user ? <User {...user} /> : null}</div>;
};

export default pageUser;
