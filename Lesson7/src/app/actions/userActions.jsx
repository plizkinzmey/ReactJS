import axios from 'axios';
import {FETCH_USER} from './actions';

export function fetchUsers() {
  return {
    type: FETCH_USER,
    payload: axios
      .get('http://jsonplaceholder.typicode.com/users/')
      .then(response => response.data)
  }
}