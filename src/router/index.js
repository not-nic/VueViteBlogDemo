import { createWebHistory, createRouter } from "vue-router";

const routes = [
    { path: "/", name: "Landing", component: () => import("../views/Landing.vue")}, // a path beginning with "/" will become the default path when the app is loaded
    { path: "/blogposts", component: () => import("../views/Blogposts.vue")},
    { path: "/createpost", component: () => import("../views/Createpost.vue")}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;