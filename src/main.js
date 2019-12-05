import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/icons";
import scroll from "./components/scroll.vue";

import "./assets/stylus/font.styl";
import "./assets/stylus/index.styl";

Vue.component("scroll", scroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
