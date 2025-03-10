import { createRouter, createWebHistory } from 'vue-router'

import BlankPage from '@/views/BlankPage.vue'
import LogoutPage from '@/views/LogoutPage.vue'

const routes = [
  {
    path: '/blank-page',
    name: 'BlankPage',
    component: BlankPage,
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: LogoutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
