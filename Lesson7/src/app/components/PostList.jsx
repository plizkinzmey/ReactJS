import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import {fetchPosts, addPost} from '../actions/postActions'
import {Form, Card, Button} from 'react-bootstrap';

export class PostList extends Component {

  constructor(props) {
    super(props);
    this.headerPostRef = React.createRef();
    this.postRef = React.createRef();

    this.addPost = this
      .addPost
      .bind(this);
  }

  addPost() {
    console.log(this.isLength);
    const id = 102;
    const userId = 3;
    const title = this.headerPostRef.current.value;
    const post = this.postRef.current.value;
    if (title !== "" && post !== "") {
      this
        .props
        .dispatch(addPost(title, userId, post, id))
    } else 
      return null;
    }
  
  render() {
    const posts = this.props;
    if (!posts.posts.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    } else {
      const mappedPosts = posts
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
              <Button type="submit" variant="primary float-right" onClick={this.addPost}>Опубликовать пост</Button>
            </Form>
          </Card>
          {mappedPosts}
        </div>
      );
    }
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchPosts());
  }
}

function mapStateToProps(state) {
  return {posts: state.posts.posts}
}

export default connect(mapStateToProps)(PostList);
