import React from "react";
import { Route } from "react-router-dom";

import Layout from "../layouts/Layout";

const App = props => {
  return (
    <div className="container-fluid">
      <Route path="/" component={Layout} />
    </div>
  );
};

export default App;
