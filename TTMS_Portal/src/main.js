// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'    //导入vueRouter
import './http'    //导入axios相关
import config from "./config"
import Vuetify from 'vuetify' //导入vuetify
import 'vuetify/dist/vuetify.min.css'   //导入vuetifyCSS
import './assets/material.css'

Vue.use(Vuetify, { theme: config.theme})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})

