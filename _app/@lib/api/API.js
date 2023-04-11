// import {useMemo} from 'react';
// import axios from 'axios';
// import {useQuery, useMutation, useQueryClient} from 'react-query';

// const baseUrl = 'https://missingdata.pythonanywhere.com/'; // Function to get the base URL
// const token = ''; // Function to get the authorization token

// const api = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   },
// });

// function useApi() {
//   const queryClient = useQueryClient();

//   const apiInstance = useMemo(() => {
//     async function get(url, options = {}) {
//       const response = await api.get(url, options);
//       return response.data;
//     }

//     async function post(url, data, options = {}) {
//       await api.post(url, data, options);
//       queryClient.invalidateQueries(url);
//     }

//     async function put(url, data, options = {}) {
//       await api.put(url, data, options);
//       queryClient.invalidateQueries(url);
//     }

//     async function del(url, options = {}) {
//       await api.delete(url, options);
//       queryClient.invalidateQueries(url);
//     }

//     return new Api({get, post, put, del});
//   }, [queryClient]);

//   return apiInstance;
// }

// const API_ENDPOINTS = {
//   GET_USERS: '/users',
//   GET_USER: id => `/users/${id}`,
//   CREATE_USER: '/users',
//   UPDATE_USER: id => `/users/${id}`,
//   DELETE_USER: id => `/users/${id}`,
// };

// class Api {
//   constructor({get, post, put, del}) {
//     this.get = get;
//     this.post = post;
//     this.put = put;
//     this.del = del;
//   }

//   getUsers() {
//     return this.get(API_ENDPOINTS.GET_USERS);
//   }

//   getUser(id) {
//     return this.get(API_ENDPOINTS.GET_USER(id));
//   }

//   createUser(data) {
//     return this.post(API_ENDPOINTS.CREATE_USER, data);
//   }

//   updateUser(id, data) {
//     return this.put(API_ENDPOINTS.UPDATE_USER(id), data);
//   }

//   deleteUser(id) {
//     return this.del(API_ENDPOINTS.DELETE_USER(id));
//   }
// }

// export default function useApiInstance() {
//   const apiInstance = useApi();
//   return useMemo(() => new Api(apiInstance), [apiInstance]);
// }
