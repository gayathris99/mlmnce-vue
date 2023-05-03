
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), name: 'home' }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/AboutLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutUs/AboutMLMNCE.vue'), name: 'about' },
      { path: 'management', component: () => import('src/pages/AboutUs/AboutManagement.vue'), name: 'management' },
      { path: 'toppers', component: () => import('src/pages/AboutUs/AboutToppers.vue'), name: 'toppers' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
