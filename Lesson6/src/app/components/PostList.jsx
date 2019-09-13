import React, {Component} from 'react';
import Post from './Post';
import {addPost, getPosts} from '../actions/actionCreators'
import PostStore from '../stores/postStore';
import {Form, Card, Button} from 'react-bootstrap';

export class PostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.onPostChange = this
      .onPostChange
      .bind(this);
    this.newPost = this
      .newPost
      .bind(this);

    this.headerPostRef = React.createRef();
    this.postRef = React.createRef();
  }

  onPostChange() {
    const posts = PostStore.posts;
    this.setState({posts});
  }

  newPost() {
    const id = this.state.posts.length + 1;
    const userId = 3;
    const headerPost = this.headerPostRef.current.value;
    const post = this.postRef.current.value;

    if (headerPost !== "" && post !== "") {
      addPost(headerPost, userId, post, id);
      this.headerPostRef.current.value = "";
      this.postRef.current.value = "";
    } else 
      return null;
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
      .map(post => {
        return <Post key={post.id} {...post}/>
      })
    return (
      <div>
        <h1>Посты</h1>
        <Card className="card my-3 px-3 py-2">
          <Form>
            <Form.Group controlId="postHeaderInput">
              <Form.Label>Заголовок поста</Form.Label>
              <Form.Control
                required
                ref={this.headerPostRef}
                type="text"
                placeholder="Введите заголовок поста"/>
            </Form.Group>
            <Form.Group controlId="postTextarea">
              <Form.Label>Пост</Form.Label>
              <Form.Control
                required
                ref={this.postRef}
                as="textarea"
                rows="3"
                placeholder="Введите содержимое поста"/>
            </Form.Group>
            <Button type="submit" variant="primary float-right" onClick={this.newPost}>Опубликовать пост</Button>
          </Form>
        </Card>
        {posts}
      </div>
    );
  }

  componentDidMount() {
    getPosts();
    PostStore.on('change', this.onPostChange)
  }

  componentWillUnmount() {
    PostStore.removeListener('change', this.onPostChange)
  }
}

export default PostList
