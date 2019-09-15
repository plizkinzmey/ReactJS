import React, {Component} from 'react';
import {Link} from 'react-router';

export class User extends Component {
  render() {
    const {id, email, phone, website, username} = this.props;
    return (
      <div className="card border-secondary mb-3 mt-3">
        <div className="card-header">
          <Link to={`/users/${id}`}>
            {username}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{website}</p>
        </div>
      </div>
    );
  }
}

export default User;
