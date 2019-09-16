import React from 'react';
import pagePost from './pagePost';
import pagePosts from './pagePosts';
import {Route, Switch} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

const PostsPage = props => {
    return (
      <div>
        <Switch>
          <Route exact path="/posts" component={pagePosts}/>
          <Route path="/posts/:postId" component={pagePost}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    )
}

export default PostsPage;