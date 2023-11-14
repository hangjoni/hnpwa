import News from "../views/News.vue";
import Newest from "../views/Newest.vue";
import Ask from "../views/Ask.vue";
import Show from "../views/Show.vue";
import Jobs from "../views/Jobs.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Newest",
    component: Newest,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/ask",
    name: "Ask",
    component: Ask,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/show",
    name: "show",
    component: Show,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
