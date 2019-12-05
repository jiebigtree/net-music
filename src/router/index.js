import Vue from "vue";
import VueRouter from "vue-router";
import finding from "@/views/finding/finding.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/finding"
  },
  {
    path: "/finding",
    name: "finding",
    component: finding
  },
  {
    path: "/vidio",
    name: "vidio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vidio/vidio.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mine/mine.vue")
  },
  {
    path: "/cloud",
    name: "cloud",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cloud/cloud.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
