import React, {Component} from 'react';
import Post, {BlogItem} from './Post';


export class Blog extends Component {
  render() {
    const blogItems = this
      .props
      .items
      .map((item, index) => {
        return <Post
          key={index}
          HeaderPost={item.HeaderPost}
          WhoPost={item.WhoPost}
          DatePost={item.DatePost}
          BodyPost={item.BodyPost}/>
      })
    return blogItems
  }
}

export default Blog;
