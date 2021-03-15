import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Privacy from "../views/Privacy.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: `Home`,
    },
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta: {
      title: `Privacy`,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: `Reset Password`,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
