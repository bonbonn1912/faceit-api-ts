import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Setup from '../views/Setup.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/setup', 
    name: 'Setup', 
    component: Setup
  }
   
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : routes
})

export default router
