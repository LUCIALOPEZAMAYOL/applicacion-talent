import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "home",
      component: () => import("@/layouts/Layout"),
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('@/views/Home'),
      },
      ]
    }
  ]
});
