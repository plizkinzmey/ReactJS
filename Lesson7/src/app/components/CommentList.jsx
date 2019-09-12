import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment';
import {fetchComments} from '../actions/commentActions';


export class CommentList extends Component {
  render() {
    const comments = this.props;
    if (!comments.comments.length) {
      return (
        <div className="d-flex justify-content-center my-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
    const mappedComments = comments.comments.map(comment => {
        return <Comment key={comment.id} {...comment}/>
      });
    return (
      <div>
        <h1>Комментарии</h1>
        {mappedComments}
      </div>
    );
  }

  componentDidMount() {
    this
      .props
      .dispatch(fetchComments());
  }
}

function mapStateToProps(state) {
  return {comments: state.comments.comments}
}

export default connect(mapStateToProps)(CommentList);
