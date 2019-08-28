import React from 'react';
import MenuItem from './MenuItem';

export default class Menu extends React.Component {
  render() {

    const items = this
      .props
      .items
      .map((item, index) => {
        return <MenuItem
          key={index}
          liClass={item.liClass}
          hrefClass={item.hrefClass}
          href={item.href}
          title={item.title}/>
        // <li key = {index} className = {item.liClass}><a className = {item.hrefClass}
        // href={item.href}>{item.title}</a></li>
      })
    return <nav
      id="navbar"
      className="navbar navbar-expand-lg fixed-top justify-content-center">
      <div id="menu" className="menu">
        <ul className="navbar-nav">
          {items}
        </ul>
      </div>
    </nav>
  }
}
