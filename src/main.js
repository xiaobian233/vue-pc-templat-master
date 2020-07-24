// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//引入公共样式
import "./assets/css/reset.less";
import "./assets/css/resetFram.less";
import "./assets/css/public.less";
//引入vuex
import store from "./store/index";

// 引入api
import api from "@/api/api.js";

// import "./utils/rem";

import i18n from "./utils/i18n";



Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.$api = api;

router.beforeEach((to, form, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    let token = store.state.token;
    if (!token) {
      next("/login");
    }
    next();
  }
  next();
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>"
});
