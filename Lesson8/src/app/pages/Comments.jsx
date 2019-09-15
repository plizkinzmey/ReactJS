import React, {Component} from 'react';
import CommentList from '../components/CommentList';
import Comment from './Comment';

export class Comments extends Component {
  render() {
    return (
      <div>
        {(!this.props.children)
          ? <CommentList/>
          : (this.props.children)}
      </div>
    );
  }
}

export default Comments;
