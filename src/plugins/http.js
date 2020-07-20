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
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    console.log("resolved");
    resolve({ userName: "danghualong", userToken: "83fc" });
  });
  // return new Promise((resolve, reject) => {
  //   axios
  //     .post(url, data)
  //     .then(res => resolve(res.data))
  //     .catch(err => reject(err.data));
  // });
};

export default {
  post
};
