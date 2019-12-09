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
  },
  {
    path: "/songMenu/:id",
    name: "songMenu",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/finding/songMenu/songMenu.vue"
      )
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
