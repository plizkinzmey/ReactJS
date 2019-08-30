import React from 'react';

export default class Login extends React.Component {
render() {
return <form className = 'px-4 py-3 col-xl-3 border mx-auto'>
<div className="form-group">
  <label forhtml="inputLogin">Логин</label>
  <input type="text" className="form-control" id="inputLogin"/>
</div>
<div className="form-group">
  <label forhtml="inputPassword">Пароль</label>
  <input type="password" className="form-control" id="inputPassword"/>
</div>
<button type="submit" className="btn btn-primary">Вход</button>
</form>
}
}