import Vue from 'vue'
import router from './router/router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.silent = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
