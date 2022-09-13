import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/cv",
    },
    {
      component: () => import("./CV.vue"),
      name: "cv",
      path: "/cv",
    },
  ],
});
