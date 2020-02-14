import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('@/styles/index.scss')

import store from 'store/index'


import App from 'pages/App.vue'
import AppTop from 'pages/AppTop.vue'
import AppSheet from 'pages/AppSheet.vue'
import AppResult from 'pages/AppResult.vue'


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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
