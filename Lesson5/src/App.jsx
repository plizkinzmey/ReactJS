import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Main}/>
    <Route path="*" component={PageNotFound}></Route>
  </Route>
</Router>, document.getElementById('root'));

// class App extends Component {   render() {     return (       <div></div> );
// } }

export default App;