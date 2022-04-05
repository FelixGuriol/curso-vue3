import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    path: '/proyectos',
    name: 'Proyectos',
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/reg-proyects',
    name: 'Created',
    // route level code-splitting
    // this generates a separate chunk (reg-proyects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reg-proyects" */ '../views/Created.vue')
  },
  {
    path: '/edit-proyect/:id',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (edit-proyects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-proyects" */ '../views/Edit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
