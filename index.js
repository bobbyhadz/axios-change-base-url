// EXAMPLE 1 - Setting the `axios` Base URL globally

import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

axios
  .get('posts')
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });

// ------------------------------------------------------------------

// // EXAMPLE 2 - Overwriting the current base URL for a specific `axios` request

// import axios from 'axios';

// axios.defaults.baseURL = 'https://google.com';

// axios({
//   method: 'GET',
//   url: 'posts',
//   baseURL: 'https://jsonplaceholder.typicode.com/',
// })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Setting the `axios` Base URL by creating an instance

// import axios from 'axios';

// // 👇️ export your instance
// export const placeholderApi = axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com/',
// });

// placeholderApi
//   .get('posts')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Setting the `axios` Base URL dynamically

// import axios from 'axios';

// export const axiosInstance = axios.create();

// function getBaseUrl() {
//   // some logic to determine base URL here
//   return Promise.resolve(
//     'https://jsonplaceholder.typicode.com/',
//   );
// }

// axiosInstance.interceptors.request.use(
//   async config => {
//     config.baseURL = await getBaseUrl();
//     return config;
//   },
//   error => Promise.reject(error),
// );

// axiosInstance
//   .get('posts')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
