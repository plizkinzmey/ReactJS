import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Post extends Component {
  render() {
    const {id, body, title} = this.props;
    return (
      <div className="card border-secondary mb-3 mt-3">
        <div className="card-header">
          <Link to={`/posts/${id}`}>
            {title}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
