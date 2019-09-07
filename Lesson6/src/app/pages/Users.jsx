import React, {Component} from 'react';
import UsersList from '../components/UsersList';
import User from './User';

class Users extends Component {
  render() {
    return (
      <div>
        <UsersList/>
      </div>
    )
  }
}

export default Users;