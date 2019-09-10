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
  }

  onCommentChange() {
    const comments = CommentStore.comments;
    this.setState({comments});
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
    getComments();
    CommentStore.on('change', this.onCommentChange);
  }

  componentWillUnmount() {
    CommentStore.removeListener('change', this.onCommentChange)
  }
}

export default CommentList;
