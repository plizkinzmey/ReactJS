import axios from 'axios';
import {FETCH_COMMENT} from './actions';

export function fetchComments() {
  return {
    type: FETCH_COMMENT,
    payload: axios.get('http://jsonplaceholder.typicode.com/comments/').then(response => response.data)
  }
}