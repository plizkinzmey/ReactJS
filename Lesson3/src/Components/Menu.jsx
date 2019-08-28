import React from 'react';
import MenuItem from './menuItem';

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
      })
    return <nav
      id="navbar"
      className="navbar navbar-expand-lg justify-content-center">
      <div id="menu" className="menu">
        <ul className="navbar-nav">
          {items}
        </ul>
      </div>
    </nav>
  }
}
