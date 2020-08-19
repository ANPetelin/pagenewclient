import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Passport from '../views/Passport.vue'
import Address from '../views/Address.vue'
import Basicdata from '../views/Basicdata.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basicdata',
    name: 'Basicdata',
    component: Basicdata
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/passport',
    name: 'Passport',
    component: Passport
  }
]

const router = new VueRouter({
  routes
})

export default router
