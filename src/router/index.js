import Vue from "vue";
import Router from "vue-router";
import index from "@/pages/index";
import login from "@/pages/login";
import main from "@/pages/main";
import sent from "@/pages/sent";
import search from "@/components/search";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      name: "index",
      component: index
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/main",
      name: "main",
      component: main,
      children: [
        {
          path: "",
          name: "",
          redirect: "search"
        },
        {
          path: "search",
          component: search
        }
      ]
    },
    {
      path: "/sent",
      name: "sent",
      component: sent
    }
  ]
});
