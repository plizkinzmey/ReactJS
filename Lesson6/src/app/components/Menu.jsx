import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.brand}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {this.props.children}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
