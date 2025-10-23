import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contactanos from '../views/Contactanos.vue'
import Planificacion from '../views/Planificacion.vue'
import Marco from '.../views/Marco.vue'
import Trabajo from '../views/Trabajo.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: Contactanos
  },
  {
    path: '/educacion',
    name: 'educacion',
    component: Planificacion
  },
  {
    path: '/marco',
    name: 'marco',
    component: Marco
  },
  {
    path: '/trabajo',
    name: 'trabajo',
    component: Trabajo
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
