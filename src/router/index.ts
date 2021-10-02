import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/index.vue'
import BasicLayout from '@/layout/BasicLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'Home',
        component: Home,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
