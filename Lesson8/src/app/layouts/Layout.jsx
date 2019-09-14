import React, {Component} from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import {Route, Switch} from 'react-router-dom';

import Main from '../pages/Main';
import UsersPage from '../pages/UsersPage';
import PostsPage from '../pages/PostsPage';
import CommentsPage from '../pages/CommentsPage';
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
                <Route path="/users" component={UsersPage}/>
                <Route path="/posts" component={PostsPage}/>
                <Route path="/comments" component={CommentsPage}/>
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
