import axios from 'axios';
import {getBaseUrl} from '../utils/getBaseUrl';

const baseUrl = getBaseUrl(); // Function to get the base URL
const token = getAuthorizationToken(); // Function to get the authorization token

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
