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

// import React, {Component} from 'react'; import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; import {BrowserRouter, Route,
// Switch, HashRouter} from 'react-router-dom'; ReactDOM.render(
// <BrowserRouter>  <App/> </BrowserRouter>, document.querySelector('#root'));