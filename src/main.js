import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes/routes";

Vue.config.productionTip = false;
const moment = require("moment");

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { VueSpinners } from "@saeris/vue-spinners";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new VueRouter({
  routes
});

Vue.use(VueRouter, VueSpinners);
Vue.use(require("vue-moment"), {
  moment
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
}).$mount("#app");
