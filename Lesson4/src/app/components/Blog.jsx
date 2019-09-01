import React, {Component} from 'react';
import Post from './Post';
import {Form, Card, Button, Popover} from 'react-bootstrap';

export class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postItems: this.props.items
    }

    this.userRef = React.createRef();
    this.headerPostRef = React.createRef();
    this.postRef = React.createRef();
    this.addPost = this
      .addPost
      .bind(this);
  }

  addPost() {
    const userName = this.userRef.current.value;
    const headerPost = this.headerPostRef.current.value;
    const post = this.postRef.current.value;
    const date = new Date().toLocaleDateString('us-US', {month: 'long',  day: 'numeric', year: 'numeric'});
    if(userName !== "" && headerPost !== "" && post !== "") {
      const postItems = [{WhoPost: userName, HeaderPost: headerPost, BodyPost: post, DatePost: date}, ...this.state.postItems ];
      this.setState({postItems});
      this.userRef.current.value = "";
      this.headerPostRef.current.value = "";
      this.postRef.current.value = "";
    } else return null;
   
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.postItems !== nextProps.postItems) {
      return {blogItems: nextProps.postItems};
    } else 
      return null;
    }
  
  render() {
    const postItems = this
      .state
      .postItems
      .map((item, index) => {
        return <Post
          key={index}
          HeaderPost={item.HeaderPost}
          WhoPost={item.WhoPost}
          DatePost={item.DatePost}
          BodyPost={item.BodyPost}/>
      })
    return ( <> 
      <Card className="card my-3 px-3 py-2">
        <Form>
          <Form.Group controlId="userInput">
            <Form.Label>Имя пользователя</Form.Label>
            <Form.Control
            required
              ref={this.userRef}
              type="text"
              placeholder="Введите имя пользователя"
              />
          </Form.Group>
          <Form.Group controlId="postHeaderInput">
            <Form.Label>Заголовок поста</Form.Label>
            <Form.Control
              required
              ref={this.headerPostRef}
              type="text"
              placeholder="Введите заголовок поста"
              />
          </Form.Group>
          <Form.Group controlId="postTextarea">
            <Form.Label>Пост</Form.Label>
            <Form.Control
              required
              ref={this.postRef}
              as="textarea"
              rows="3"
              placeholder="Введите содержимое поста"
              />
          </Form.Group>
          <Button type="submit" variant="primary float-right" onClick={this.addPost}>Опубликовать пост</Button>
        </Form>
      </Card>
      {postItems} </>) 
  }
}

export default Blog;