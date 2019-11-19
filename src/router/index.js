import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Quizzez from '../views/Quizzez.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/quizzez',
    name: 'quizzez',
    component: Quizzez
  }
]

const router = new VueRouter({
  routes
})

export default router