export const API_ENDPOINTS = {
  POST_SIGNUP: '/signup',
  POST_LOGIN: '/login',
  POST_TWEET: '/tweet',
  POST_FOLLOW: '/follow',
  POST_UNFOLLOW: '/unfollow',
  POST_SEARCH: '/search',
  GET_USERS: (page: number, size = 30) => `/users?page=${page}&size=${size}`,
  GET_FOLLOWINGLIST: (page: number, size = 30) =>
    `/following?page=${page}&size=${size}`,
  GET_FOLLOWERLIST: (page: number, size = 30) =>
    `/followers?page=${page}&size=${size}`,
  GET_MYTWEETS: (page: number, size = 30) =>
    `/my-tweets?page=${page}&size=${size}`,
  GET_MYTTIMELINE: (page: number, size = 30) =>
    `/timeline?page=${page}&size=${size}`,
};
