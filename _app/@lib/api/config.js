import axios from 'axios';

import {getBaseUrl} from '../utils/functions/getBaseUrl';
import {getStorageItem} from '../utils/functions/storage';

const baseUrl = getBaseUrl(); // Function to get the base URL
const token = getStorageItem('auth-token', 'str'); // Function to get the authorization token

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'X-Jwt-Token': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEwNyIsImV4cCI6MTY4MTQ4MTAzMH0.sU55Xp56pgoJsBGZkq81wwIGyxA35Bqy96rw9nNkCGM'}`,
  },
});
