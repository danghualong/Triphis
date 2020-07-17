import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
    meta: {
      authless: true
    }
  },
  {
    path: "/",
    component: resolve => require(["@/views/Main"], resolve),
    children: [
      {
        path: "/",
        name: "home",
        component: resolve => require(["@/views/Home"], resolve)
      },
      {
        path: "about",
        name: "about",
        component: () => import("@/views/About")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
