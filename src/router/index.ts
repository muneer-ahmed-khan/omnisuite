import { createRouter, createWebHistory } from 'vue-router'

import BlankPage from '@/views/BlankPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/blank-page',
      name: 'BlankPage',
      component: BlankPage,
    },
  ],
})

export default router
