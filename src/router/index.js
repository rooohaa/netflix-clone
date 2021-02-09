import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

const routes = [
   {
      path: '/',
      component: () => import('../views/Home.vue')
   },
   {
      path: '/login',
      component: () => import('../views/Login.vue'),
      meta: {
         requiresUnAuth: true
      }
   },
   {
      path: '/register',
      component: () => import('../views/Register.vue')
   },
   {
      path: '/movies',
      component: () => import('../views/Movies.vue'),
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/my-movies',
      component: () => import('../views/MyMovies.vue'),
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/:notFound(.*)',
      component: () => import('../views/NotFound.vue')
   }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach( (to, _, next) => {
   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
      next('/login')
   } else if (to.meta.requiresUnAuth && store.getters.isAuthenticated) {
      next('/movies')
   } else {
      next()
   }
}) 

export default router
