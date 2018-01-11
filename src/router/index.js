import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/pages/About'
import BelajarProps from '@/pages/BelajarProps'
import LearnAPI from '@/pages/LearnAPI'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/belajarprops',
      name: 'BelajarProps',
      component: BelajarProps
    },

    {
      path: '/learn-api',
      name: 'LearnAPI',
      component: LearnAPI
    }
  ]
})
