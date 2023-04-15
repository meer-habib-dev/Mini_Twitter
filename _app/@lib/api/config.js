// import axios from 'axios';

// import {getBaseUrl} from '../utils/functions/getBaseUrl';
// import {getStorageItem} from '../utils/functions/storage';

// const baseUrl = getBaseUrl(); // Function to get the base URL
// const token = getStorageItem('auth-token', 'str'); // Function to get the authorization token
// console.log('config', token);
// export const api = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     'X-Jwt-Token': `Bearer ${token}`,
//   },
// });
import axios from 'axios';
import {getBaseUrl} from '../utils/functions/getBaseUrl';
import {getStorageItem} from '../utils/functions/storage';
import {queryCache} from 'react-query';

const baseUrl = getBaseUrl();

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = getStorageItem('auth-token', 'str');
  if (token) {
    config.headers['X-Jwt-Token'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      queryCache.invalidateQueries('data'); // This will invalidate the cached data for the 'data' query, triggering a refetch.
    }
    return Promise.reject(error);
  },
);

export default api;
