import React, {Component} from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import {Route, Switch} from 'react-router-dom';

import Main from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
import Post from '../pages/Post';
import Posts from '../pages/Posts';
import Comment from '../pages/Comment';
import Comments from '../pages/Comments';
import PageNotFound from '../pages/PageNotFound';

export class Layouts extends Component {
  constructor(props) {
    super(props);
    this.brand = 'React Blog'
  }

  isActive(href) {
    return window.location.pathname === href;
  }
  render() {
    return (
      <div>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive("/")}>
            Главная
          </MenuItem>
          <MenuItem href="/posts" active={this.isActive("/posts")}>
            Посты
          </MenuItem>
          <MenuItem href="/comments" active={this.isActive("/comments")}>
            Комментарии
          </MenuItem>
          <MenuItem href="/users" active={this.isActive("/users")}>
            Пользователи
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/users" component={Users}/>
                <Route path="/users/:userId" component={User}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/posts/:postId" component={Post}/>
                <Route path="/comments" component={Comments}/>
                <Route path="/comments/:commentId" component={Comment}/>
                <Route path="*" component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </div>
    );
  }
}

export default Layouts;
