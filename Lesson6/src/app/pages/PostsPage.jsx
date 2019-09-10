import React, {Component} from 'react';
import Post from './Post';
import Posts from './Posts';
import {Route, Switch} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

class PostsPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/posts" component={Posts}/>
          <Route path="/posts/:postId" component={Post}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    )
  }
}

export default PostsPage;