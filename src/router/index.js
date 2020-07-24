import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/view/login.vue")
    },
    // {
    //   path: "/",
    //   name: "index",
    //   component: index,
    //   meta: {
    //     title: "首页",
    //     requireAuth: false
    //   }
    // }
    {
      path:"*",
      redirect:"/login"
    }
  ]
});
