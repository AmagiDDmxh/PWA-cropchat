import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: r => require(['@/components/HomeView'], r)
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: r => require(['@/components/DetailView'], r)
    },
    {
      path: '/post',
      name: 'post',
      component: r => require(['@/components/PostView'], r)
    }
  ]
})
