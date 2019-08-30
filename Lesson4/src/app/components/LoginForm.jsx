import React, {Component} from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    }
  }
  render() {
    let loginForm;
    return (
      <div>
        <a
          className="nav-link nav-link-top btnlink"
          id="dropdownLoginForm"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          ВХОД
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownLoginForm">
          <form className="px-4 py-3">
            <div className="form-group">
              <label htmlFor="loginLabel">Логин</label>
              <input
                type="email"
                className="form-control"
                id="loginLabel"
                placeholder="Имя, почта"/>
            </div>
            <div className="form-group">
              <label htmlFor="passwordLabel">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="passwordLabel"
                placeholder="Password"/>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                <label className="form-check-label" for="dropdownCheck">
                  Запомнить меня
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Вход</button>
          </form>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Первый раз здесь? Зарегистрироваться</a>
          <a className="dropdown-item" href="#">Забыли пароль?</a>
        </div>
      </div>
    )
  }
}

export default LoginForm;
