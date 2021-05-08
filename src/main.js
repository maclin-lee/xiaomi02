import Vue from 'vue'
import App from './App.vue'
import router from "./routers"
import Toast from "components/toast"
import store from "@/stores"
Vue.prototype.$toast=Toast
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
