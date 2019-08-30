import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
// import Login from './components/login';


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
      },
      {
        liClass: "nav-item dropdown",
        href: "#",
        hrefClass: "nav-link nav-link-top",
        title: "ВХОД",
        typeLink: "loginLink"
      }
    ];

    return <div className="container-fluid">
      <Menu items={menuItems}/>
    </div>
  }
}
ReactDOM.render(
  <App/>, document.querySelector('#root'));