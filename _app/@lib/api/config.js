import axios from 'axios';

import {getBaseUrl} from '../utils/functions/getBaseUrl';
import storage from '../utils/functions/storage';

const baseUrl = getBaseUrl(); // Function to get the base URL
const token = storage.getValue('auth-token'); // Function to get the authorization token

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
