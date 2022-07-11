import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import SideProject from '../views/SideProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/side-project',
    name: 'Side Project',
    component: SideProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  
  routes
})

export default router
