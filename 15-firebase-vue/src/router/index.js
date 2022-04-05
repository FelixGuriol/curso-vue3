import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    // route level code-splitting
    // this generates a separate chunk (proyectos.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue'),
    meta: { protect: true }
  },
  {
    path: '/reg-proyects',
    name: 'Created',
    // route level code-splitting
    // this generates a separate chunk (reg-proyects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reg-proyects" */ '../views/Created.vue'),
    meta: { protect: true }
  },
  {
    path: '/edit-proyect/:id',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (edit-proyects.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "edit-proyects" */ '../views/Edit.vue'),
    meta: { protect: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(//sirve como middleware para ver si estas logeado o no
  (to, from, next) => {
    if (to.meta.protect) {
      if (localStorage.getItem("user")) {
        next();
      } else {
        next("/login");
      }
    } else {
      next();
    }
  }
)

export default router
