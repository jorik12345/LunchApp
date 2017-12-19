import Vue from 'vue'
import VueResource from 'vue-resource'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { Form } from 'bootstrap-vue/es/components';

Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Form)

new Vue({
  el: '#app',
  render: h => h(App)
})
