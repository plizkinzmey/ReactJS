import React, {Component} from 'react';

export class Post extends Component {
  render() {
    return (
      <div className="card my-3">
        <div className="card-header">
          {this.props.HeaderPost}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{this.props.BodyPost}</p>
            <footer className="blockquote-footer">{this.props.DatePost} by <span className ="text-primary">{this.props.WhoPost}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Post;
