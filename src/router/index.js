import { createRouter, createWebHistory } from "vue-router";
import AllKitty from "../views/AllKitty.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "allKitty",
      component: AllKitty,
    },
    {
      path: "/favorite-kitty",
      name: "favorite",
      component: () => import("../views/FavoriteKitty.vue"),
    },
  ],
  linkExactActiveClass: "active-exact",
});

export default router;
