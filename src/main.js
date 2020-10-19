import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import SearchResults from './components/SearchResults'

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/searchresults', name: 'searchresults', component: SearchResults }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// use router
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
