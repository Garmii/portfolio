import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";

import "vue-fullpage.js/dist/style.css";
import VueFullPage from "vue-fullpage.js";

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .use(VueFullPage)
  .mount("#app");
