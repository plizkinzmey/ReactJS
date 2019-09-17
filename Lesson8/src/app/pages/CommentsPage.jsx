import React from 'react';
import pageComment from './pageComment';
import pageComments from './pageComments';
import {Route, Switch} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

const CommentsPage = props => {
    return (
      <div>
        <Switch>
          <Route exact path="/comments" component={pageComments}/>
          <Route path="/comments/:commentId" component={pageComment}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    )
}

export default CommentsPage;