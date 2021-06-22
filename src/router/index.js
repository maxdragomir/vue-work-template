import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lottery',
    meta: {layout: 'main'},
    component: () => import('@/pages/Lottery')
  },
  {
    path: '/account',
    name: 'Account',
    meta: {layout: 'account'},
    component: () => import('@/pages/Account')
  },
  {
    path: '/raffle',
    name: 'Raffle',
    meta: {layout: 'main'},
    component: () => import('@/pages/Raffle')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
