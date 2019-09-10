import React, {Component} from 'react';
import axios from 'axios';
import User from './User';

export class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
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
    axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({users: response.data})
      })
  }
}

export default UsersList;
