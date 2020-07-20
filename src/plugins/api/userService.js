//user相关api请求服务
import http from "../http";
import urlPrefix from "./urlBase";
import urls from "./urls";

export const login2 = user => {
  return http.post(urlPrefix.BASE_URL + urls.LOGIN_URL, user);
};
