import { createRouter, createWebHistory } from 'vue-router'
import { MAP_ROUTE_PATH } from '../enums'
/**
 * @type {import('vue-router').RouterOptions['routes']}
 */
const routes = [
  {
    path: MAP_ROUTE_PATH.HOME,
    component: () => import('../views/home.vue'),
  },
  {
    path: MAP_ROUTE_PATH.PRICING,
    component: () => import('../views/pricing.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
