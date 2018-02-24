import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://www.liupengbo.top/blog/'; // 请求接口地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';

var instance = axios.create();
instance.defaults.timeout = 2500;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
