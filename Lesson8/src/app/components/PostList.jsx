import React, {Component} from 'react';
import Post from './Post';
import axios from 'axios';

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  render() {
    if (!this.state.posts.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
    const posts = this
      .state
      .posts
      .map((post, index) => {
        return <Post key={post.id} {...post}/>
      });
    return (
      <div>
        <h1>Посты</h1>
        {posts}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({posts: response.data})
      })
  }
}

export default PostList;
