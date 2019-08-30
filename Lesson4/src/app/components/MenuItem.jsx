import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

export default class MenuItem extends React.Component {
  render() {
  if(this.props.typeLink == "loginLink") {
    return <li className={this.props.liClass}><LoginForm/></li>
  } else {
    return  <li className={this.props.liClass}>
    <a className ={this.props.hrefClass} href={this.props.href}>{this.props.title}</a>
  </li>
  }
    
    
  }
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hrefClass: PropTypes.string.isRequired
}

