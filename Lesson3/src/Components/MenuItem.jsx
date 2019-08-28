import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return <li className={this.props.liClass}>
      <a className ={this.props.hrefClass} href={this.props.href}>{this.props.title}</a>
    </li>
  }
}