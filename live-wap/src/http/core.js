import axios from 'axios';
import qs from 'qs';
import Store from '../store';

axios.defaults.timeout = 5000;
/* eslint-disable no-undef */
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/dev' : '/koklive';
// axios.defaults.baseURL = 'http://172.21.34.74';
// axios.defaults.headers['x-uid'] = 1;
axios.defaults.headers['x-source'] = 1;
axios.defaults.headers['x-version'] = 1.0;
axios.defaults.headers['x-client'] = 2;


axios.interceptors.request.use(
  config => {
    if (Store.getters.userinfo && Store.getters.userinfo !== 0) {
      config.headers['x-uid'] = Store.getters.userinfo.userId;
    }
    if (config.headers['Content-Type'] === 'multipart/form-data;') {
      return config;
    }
    if (config.method === 'post' || config.method === 'put') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if (response.data && response.data.code === '200') {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
