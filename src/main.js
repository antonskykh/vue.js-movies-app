import Vue from "vue";
import AppWrapper from "./AppWrapper";

Vue.config.productionTip = false;

new Vue({
  render: h => h(AppWrapper),
}).$mount("#app-wrapper");
