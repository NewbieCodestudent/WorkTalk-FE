export default [
  {
    path: '/user/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue'),
  },
  {
    path: '/user/join',
    name: 'join',
    component: () => import('@/views/JoinPage.vue'),
  },
  {
    path: '/user/mypage/reservation',
    name: 'reservation',
    component: () => import('@/views/userView/ReservationPage.vue'),
  },
  {
    path: '/user/mypage/review',
    name: 'review',
    component: () => import('@/views/userView/ReviewPage.vue'),
  },
  {
    path: '/user/mypage/payment',
    name: 'payment',
    component: () => import('@/views/userView/PaymentPage.vue'),
  },
]


