import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
