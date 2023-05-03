
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
      { path: 'toppers', component: () => import('src/pages/AboutUs/AboutToppers.vue'), name: 'toppers' },
      { path: 'infra', component: () => import('src/pages/AboutUs/AboutInfra.vue'), name: 'infra' },
      { path: 'staff', component: () => import('src/pages/AboutUs/AboutStaff.vue'), name: 'staff' },

    ]
  },
  {
    path: '/academia',
    component: () => import('layouts/AcademiaLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Academia/AcademiaLibrary.vue'), name: 'library' },
      { path: 'affiliation-order', component: () => import('pages/Academia/AffiliationOrder.vue'), name: 'affiliation-order' },
      // { path: 'admissions', component: () => import('pages/Academia/AcademiaAdmissions.vue'), name: 'admissions' },
      { path: 'syllabus', component: () => import('pages/Academia/AcademiaSyllabus.vue'), name: 'syllabus' },
      { path: 'course-structure', component: () => import('pages/Academia/CourseStructure.vue'), name: 'course-structure' },
      { path: 'student-community', component: () => import('pages/Academia/StudentCommunity.vue'), name: 'student-community' },
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
