/* eslint-disable no-unused-vars */
import axios from "axios";
import store from "../store";

axios.interceptors.request.use(
  config => {
    if (store.state.userToken) {
      config.headers.common["token"] = store.state.userToken;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

var post = function(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(res => {
        if (res.status == 200) {
          resolve(res.data);
        } else {
          reject(res.error);
        }
      })
      .catch(err => {
        reject(err.response.data);
      });
  });
};

export default {
  post
};
