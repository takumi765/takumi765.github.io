// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Default from '@/layouts/default/Default.vue'
import Profile from '@/views/Profile.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'Profile',
        component: Profile,
      },
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  /* ページ内スクロール */
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth'};
    } else {
      return { top: 0, behavior: 'smooth'};
    }
  }
})

export default router
