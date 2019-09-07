import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Comment extends Component {
  render() {
    const {id, name, email, body} = this.props;
    return (
      <div className="card border-secondary mb-3 mt-3">
        <div className="card-header">
          <Link to={`/comments/${id}`}>
            {name}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{email}</p>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default Comment;
