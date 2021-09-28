import axios from 'axios';
import { API_SERVER_PATH } from 'utils/config';

const ACCESS_TOKEN = localStorage.getItem('token');

export const instance = axios.create({
  baseURL: API_SERVER_PATH,
  timeout: 3000,
});

// ----------------------------------
// axios request 처리
instance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers.Authorization = ACCESS_TOKEN;
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// ----------------------------------
// axios response 처리
instance.interceptors.response.use(
  response => {
    console.log(response);

    return response.data.data;
  },
  error => {
    console.error(error);
  },
);
