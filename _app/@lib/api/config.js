import axios from 'axios';

import {getBaseUrl} from '../utils/functions/getBaseUrl';
import {getStorageItem} from '../utils/functions/storage';

const baseUrl = getBaseUrl(); // Function to get the base URL
const token = getStorageItem('auth-token', 'str'); // Function to get the authorization token
console.log('config', token);
export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'X-Jwt-Token': `Bearer ${token}`,
    // 'X-Jwt-Token': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwOSIsImV4cCI6MTY4MTU5MTUzNX0.mNFwLi3K0Kzbiy5aOmJs_b73swADbAAAArGILK2JzYk'}`,
  },
});
