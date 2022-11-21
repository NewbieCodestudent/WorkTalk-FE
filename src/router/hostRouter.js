export default [
  {
    path: '/host/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/host/join',
    name: 'join',
    component: () => import('@/views/JoinPage.vue'),
  },
]


