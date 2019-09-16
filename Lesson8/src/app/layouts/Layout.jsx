import React, { Component, useState } from "react";
import Menu from "../components/Menu";
import MenuItem from "../components/MenuItem";
import { Route, Switch } from "react-router-dom";

import Main from "../pages/Main";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import PageNotFound from "../pages/PageNotFound";
import { Card } from "react-bootstrap";

const Layouts = props => {
  const brand = "React blog";

  const isActive = href => {
    return window.location.pathname === href;
  };

  return (
    <>
      <Menu brand={brand}>
        <MenuItem href="/" active={isActive("/")}>
          Главная
        </MenuItem>
        <MenuItem href="/posts" active={isActive("/posts")}>
          Посты
        </MenuItem>
        <MenuItem href="/comments" active={isActive("/comments")}>
          Комментарии
        </MenuItem>
        <MenuItem href="/users" active={isActive("/users")}>
          Пользователи
        </MenuItem>
      </Menu>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/users" component={UsersPage} />
        <Route path="/posts" component={PostsPage} />
        <Route path="/comments" component={CommentsPage} />
        <Route path="*" component={PageNotFound} />
      </Switch>
      <Card.Footer>&copy; 2019</Card.Footer>
    </>
  );
};

export default Layouts;
