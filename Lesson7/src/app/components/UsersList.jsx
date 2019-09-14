import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './User';
import {fetchUsers} from '../actions/userActions';

export class UsersList extends Component {
  render() {
    const users = this.props;
    if (!users.users.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
    const mappedUsers = users
      .users
      .map(user => {
        return <User key={user.id} {...user}/>
      });
    return (
      <div>
        <h1>Пользователи</h1>
        {mappedUsers}
      </div>
    );
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchUsers());
  }
}

function mapStateToProps(state) {
  return {users: state.users.users}
}

export default connect(mapStateToProps)(UsersList);
