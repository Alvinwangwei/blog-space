import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layout/BasicLayout.vue';
import AdminLayout from '@/layout/AdminLayout.vue';
import Home from '@/views/home/index.vue';
import Article from '@/views/article/index.vue';
import SettingArticle from '@/views/setting/article/index.vue';

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
  },
  {
    path: '/setting',
    name: 'Setting',
    component: AdminLayout,
    children: [
      {
        path: 'article',
        name: 'settingArticle',
        component: SettingArticle,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
