import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFullPage from "vue-fullpage";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  VueFullPage,
  render: (h) => h(App),
}).$mount("#app");
