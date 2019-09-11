import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Layout from '../layouts/Layout';

export class App extends Component {
  render() {
    return (
      <div className="ccontainer-fluid">
        <Route path="/" component={Layout}/>
      </div>
    );
  }
}

export default App;