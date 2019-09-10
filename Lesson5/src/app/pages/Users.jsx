import React, {Component} from 'react';
import UsersList from '../components/UsersList';
import User from './User';

class Users extends Component {
  render() {
    return (
      <div>
        {(!this.props.children)
          ? (<UsersList/>)
          : (this.props.children)}
      </div>
    )
  }
}

export default Users;