import React, {Component} from 'react';
import User from './User';
import Users from './Users';
import {Route, Switch} from 'react-router-dom';

import PageNotFound from '../pages/PageNotFound';

class UsersPage extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/users" component={Users}/>
          <Route path="/users/:userId" component={User}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </div>
    )
  }
}

export default UsersPage;