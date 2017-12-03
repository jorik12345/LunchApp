import Vue from 'vue'
import Router from 'vue-router'
import LunchItems from '@/components/LunchItems'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LunchItems',
      component: LunchItems
    }
  ]
})
