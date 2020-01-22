import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

import App from 'pages/App.vue'
import AppTop from 'pages/AppTop.vue'
import AppSheet from 'pages/AppSheet.vue'
import AppResult from 'pages/AppResult.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'top',
    component: AppTop,
  },
  {
    path: '/sheet',
    name: 'sheet',
    component: AppSheet,
  },
  {
    path: '/result',
    name: 'result',
    component: AppResult,
  },
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
