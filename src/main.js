import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Select, Row, Col, Input, Card } from "element-ui";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Card);
Vue.use(Col);
Vue.use(Input);
Vue.use(Row);
Vue.use(Select);

router.beforeEach((to, from, next) => {
  if (!to.meta.authless) {
    if (store.state.userToken) {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.fullPath } });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
