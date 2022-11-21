import { createRouter, createWebHistory } from 'vue-router'
import userRouter from './userRouter'
import hostRouter from './hostRouter'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
  ...userRouter,
  ...hostRouter,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
