import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Quizzez from '../views/Quizzez.vue'
import Quizview from '../views/Quizview.vue'
import QuizAdded from '../views/QuizAdded.vue'

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
  },
  {
    path: '/quizadded',
    name: 'quizadded',
    component: QuizAdded
  },
  {
    path: '/quiz/:name',
    name: 'quiz',
    component: Quizview
  }
]

const router = new VueRouter({
  routes
})

export default router