import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layout/BasicLayout.vue';
import Home from '@/views/home/index.vue';
import Article from '@/views/article/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/blog/index',
  },
  {
    path: '/blog',
    name: 'Home',
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'Home',
        component: Home,
      },
      {
        path: 'article',
        name: 'Article',
        component: Article,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
