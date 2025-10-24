import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactanosView from '@/views/ContactanosView.vue'
import EducacionView from '@/views/EducacionView.vue'
import DirectorioView from '@/views/DirectorioView.vue'
import ProgramaView from '@/views/ProgramaView.vue'
import OrganismoView from '@/views/OrganismoView.vue'
import HorarioView from '@/views/HorarioView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/servicios',
    name: 'servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contactanos',
    name: 'contactanos',
    component: ContactanosView
  },
  {
    path: '/educacion',
    name: 'educacion',
    component: EducacionView
  },
  {
    path: '/directorio',
    name: 'directorio',
    component: DirectorioView
  },
  {
    path: '/programas',
    name: 'programas',
    component: ProgramaView
  },
  {
    path: '/organismo',
    name: 'organismo',
    component: OrganismoView
  },
  {
    path: '/horarios',
    name: 'horarios',
    component: HorarioView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
