import React, {Component} from 'react';
import PostList from '../components/PostList';
import Post from './Post';

export class Posts extends Component {
  render() {
    return (
      <div>
        {(!this.props.children)
          ? <PostList/>
          : (this.props.children)}
      </div>
    );
  }
}

export default Posts;
