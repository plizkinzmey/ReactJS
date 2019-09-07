import React, {Component} from 'react';
import Comment from './Comment';
import {getComments} from '../actions/actionCreators'
import CommentStore from '../stores/commentStore';

export class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
    this.onCommentChange = this
      .onCommentChange
      .bind(this);
    let ismount = false;
  }

  onCommentChange() {
    if (this.ismount) {
      const comments = CommentStore.comments;
      this.setState({comments});
    } else 
      null
  }

  render() {
    if (!this.state.comments.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      )
    }
    const comments = this
      .state
      .comments
      .map(comment => {
        return <Comment key={comment.id} {...comment}/>
      });
    return (
      <div>
        <h1>Комментарии</h1>
        {comments}
      </div>
    );
  }

  componentDidMount() {
    this.ismount = true;
    if (this.ismount) {
      getComments();
      CommentStore.on('change', this.onCommentChange);
    } else null

  }

  componentWillUnmount() {
    this.ismount = false;
  }
}

export default CommentList;
