import axios from 'axios';
import store from './store/index';

const baseURL = 'https://cff1-106-79-195-39.in.ngrok.io';
// const baseURL = 'http://192.168.147.77:3000/';
axios.defaults.baseURL = baseURL;
axios.defaults.headers.get["ngrok-skip-browser-warning"] = "*";

axios.interceptors.request.use(function (config) {
    // console.log(store.getters.getAccessToken() , "Here in axios config")
    config.headers['Authorization'] = `Bearer ${store.getters.getAccessToken}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default axios

