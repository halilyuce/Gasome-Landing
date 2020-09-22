import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Privacy from "../views/Privacy.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: `Home`
    }
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy,
    meta: {
      title: `Privacy`
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
