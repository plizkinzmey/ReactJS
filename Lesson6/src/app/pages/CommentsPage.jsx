import React, {Component} from 'react';
import Comment from './Comment';
import Comments from './Comments';
import {Route, Switch} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

class CommentsPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/comments" component={Comments}/>
          <Route path="/comments/:commentId" component={Comment}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    )
  }
}

export default CommentsPage;