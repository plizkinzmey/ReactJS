import React, { Component, useState, useEffect } from "react";
import User from "./User";
import { Card, Form, Button } from "react-bootstrap";
import axios from "axios";

const UsersList = props => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWebsite, setUserWebsite] = useState("");

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("https://reactjs-9b967.firebaseio.com/users.json").then(res => {
      const userData = res.data;
      const users = [];
      for (const key in userData) {
        users.push({
          id: key,
          userName: userData[key].userName,
          userEmail: userData[key].userEmail,
          userPhone: userData[key].userPhone,
          userWebsite: userData[key].userWebsite
        });
      }
      setUserList(users);
    });
  }, []);

  const userNameChangeHandler = event => {
    setUserName(event.target.value);
  };
  const userEmailChangeHandler = event => {
    setUserEmail(event.target.value);
  };
  const userPhoneChangeHandler = event => {
    setUserPhone(event.target.value);
  };
  const userWebsiteChangeHandler = event => {
    setUserWebsite(event.target.value);
  };
  const userAddHandler = () => {
    setUserList([{ userName, userEmail, userPhone, userWebsite}, ...userList] );
    axios
      .post("https://reactjs-9b967.firebaseio.com/users.json", {
        userName,
        userEmail,
        userPhone,
        userWebsite
      })
      .then(res => {
      })
      .catch(err => {
        console.log(err);
      });
  };

  const mappedUserList = userList.map(user => {
    return <User key={user.id} {...user} />
  });
  
  return (
    <div>
      <h1>Пользователи</h1>
      <Card className="card my-3 px-3 py-2">
        <Form>
          <Form.Group controlId="userName">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите имя пользователя"
              onChange={userNameChangeHandler}
              value={userName}
            />
          </Form.Group>
          <Form.Group controlId="userEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите email"
              onChange={userEmailChangeHandler}
              value={userEmail}
            />
          </Form.Group>
          <Form.Group controlId="userPhone">
            <Form.Label>Телефон</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите телефон"
              onChange={userPhoneChangeHandler}
              value={userPhone}
            />
          </Form.Group>
          <Form.Group controlId="userWebsite">
            <Form.Label>Вебсайт</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Введите вебсайт"
              onChange={userWebsiteChangeHandler}
              value={userWebsite}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary float-right"
            onClick={userAddHandler}
          >
            Добавить пользователя
          </Button>
        </Form>
      </Card>
      {mappedUserList}
    </div>
  );
};

export default UsersList;
