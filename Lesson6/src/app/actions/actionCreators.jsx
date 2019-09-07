import axios from 'axios';
import dispatcher from '../dispatcher';
import { ADD_POST, GET_POSTS, GET_COMMENTS, GET_USERS } from './actions';

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

export function getComments() {
  axios
    .get('http://jsonplaceholder.typicode.com/comments/')
    .then(response => {
      const data = response.data;
      const action = {
        type: GET_COMMENTS,
        data:data
      };
      dispatcher.dispatch(action);
    })
}

export function getUsers() {
  axios
    .get('http://jsonplaceholder.typicode.com/users/')
    .then(response => {
      const data = response.data;
      const action = {
        type: GET_USERS,
        data:data
      };
      dispatcher.dispatch(action);
    })
}