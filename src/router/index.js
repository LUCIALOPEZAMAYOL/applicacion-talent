import Vue from "vue";
import Router from "vue-router";
import error from "@/views/Error"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "home",
      component: () => import("@/layouts/Layout"),
      children: [
        {
          name: "home",
          path: "home",
          component: () => import("@/views/Home")
        },
        {
          name: "chat",
          path: "chat",
          component: () => import("@/views/Chat")
        }
      ]
    },
    {
      name: "error",
      path: "/error",
      component: error
    }
  ]
});
