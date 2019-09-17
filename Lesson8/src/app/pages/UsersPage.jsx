import React from "react";
import pageUser from "./pageUser";
import pageUsers from "./pageUsers";
import { Route, Switch } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";

const UsersPage = props => {
  return (
    <>
      <Switch>
        <Route exact path="/users" component={pageUsers} />
        <Route path="/users/:userId" component={pageUser} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </>
  );
};

export default UsersPage;
