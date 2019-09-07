import React, {Component} from 'react';
import User from './User';
import {getUsers} from '../actions/actionCreators'
import UserStore from '../stores/userStore';

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.onUserChange = this
      .onUserChange
      .bind(this);
    let ismount = false;
  }

  onUserChange() {
    if (this.ismount) {
      const users = UserStore.users;
      this.setState({users});
    }

  }

  render() {
    if (!this.state.users.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
    const users = this
      .state
      .users
      .map((user, index) => {
        return <User key={user.id} {...user}/>
      });
    return (
      <div>
        <h1>Пользователи</h1>
        {users}
      </div>
    );
  }

  componentDidMount() {
    this.ismount = true;
    if (this.ismount) {
      getUsers();
      UserStore.on('change', this.onUserChange);
    }
  }
  componentWillUnmount() {
    this.ismount = false;
  }
}

export default UsersList;
