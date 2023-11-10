import News from "../views/News.vue";
import Newest from "../views/Newest.vue";
import Ask from "../views/Ask.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "News",
    component: Newest,
  },
  {
    path: "/news",
    name: "news",
    component: "News",
  },
  {
    path: "/ask",
    name: "ask",
    component: "/Ask",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
