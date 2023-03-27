// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Default from '@/layouts/default/Default.vue'
import Profile from '@/views/Profile.vue'
import Home    from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path     : '',
        name     : 'Profile',
        component: Profile,
      },
      {
        path     : 'home',
        name     : 'Home',
        component: Home,
      },
    ],
  },
]

  /* ページ内スクロール */
const scrollBehavior = function(to) {
  if (to.hash) {
    return { 
      el      : to.hash,
      behavior: 'smooth',
      offset  : { x: 0, y: 100 },
    };
  } else {
    return { 
      top     : 0, 
      behavior: 'smooth',
    };
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior
})

export default router
