import axios from 'axios';
import dispatcher from '../dispatcher';
import { ADD_POST, GET_POSTS } from './actions';

export function addPost(title, userId, body, id) {
  const action = {
    type: ADD_POST,
    data: { title, userId, body, id}
  }
  dispatcher.dispatch(action);
}

export function getPosts() {
  axios
    .get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      const data = response.data;
      const action = {
        type: GET_POSTS,
        data:data
      };
      dispatcher.dispatch(action);
    })
}