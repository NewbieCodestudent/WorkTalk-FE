import { createRouter, createWebHistory } from 'vue-router'
import userRouter from './userRouter'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
  ...userRouter,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
