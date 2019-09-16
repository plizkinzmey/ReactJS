import axios from 'axios';
import {FETCH_POST, ADD_POST} from './actions';

export function fetchPosts() {
  return {
    type: FETCH_POST,
    payload: axios
      .get('http://jsonplaceholder.typicode.com/posts/')
      .then(response => response.data)
  }
}

export function addPost(title, userId, body, id) {
  return {
    type: ADD_POST,
    payload: {
      title,
      userId,
      body,
      id
    }
  }
}