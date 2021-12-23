import axios from 'axios';

export const getTask = () => {
  return axios.get('http://localhost:4000/');
}

export const postTask = () => {
  return axios.post('http://localhost:4000/');
}