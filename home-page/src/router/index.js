import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Project from '../views/Project.vue'
import Page404 from '../views/Page404.vue'

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
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
    hidden: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
