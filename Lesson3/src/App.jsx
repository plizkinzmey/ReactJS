import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap from 'react-bootstrap';

class App extends React.Component {
  render() {
    const menuItems = [
      {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "КУРСЫ"
      }, {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "ПРЕПОДАВАТЕЛИ"
      }, {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "ОТЗЫВЫ"
      }, {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "КОНТАКТЫ"
      }, {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "ВАКАНСИИ"
      }, {
        liClass: "nav-item",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "ВХОД"
      }
    ];

    return <div className="container-fluid">
      <Menu items={menuItems}/>
    </div>
  }
}
ReactDOM.render(
  <App/>, document.querySelector('#root'));