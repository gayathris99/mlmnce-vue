
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
      // { path: 'course-structure', component: () => import('pages/Academia/CourseStructure.vue'), name: 'course-structure' },
      { path: 'student-community', component: () => import('pages/Academia/StudentCommunity.vue'), name: 'student-community' },
    ]

  },
  {
    path: '/naac',
    component: () => import('layouts/NAACLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NAAC/NAACCertificate.vue'), name: 'naac-certificate' },
      { path: 'academic-plan', component: () => import('pages/NAAC/AcademicPlan.vue'), name: 'academic-plan' },
      { path: 'iqac-reports', component: () => import('pages/NAAC/IQACReports.vue'), name: 'iqac-reports' },
      { path: 'iqac-compositions', component: () => import('pages/NAAC/IQACCompositions.vue'), name: 'iqac-compositions' },
      { path: 'aqar', component: () => import('pages/NAAC/AQARComponent.vue'), name: 'aqar' },
      { path: 'best-practices', component: () => import('pages/NAAC/BestPractices.vue'), name: 'best-practices' },
      { path: 'student-survey', component: () => import('pages/NAAC/StudentSurvey.vue'), name: 'student-survey' },
      { path: 'others', component: () => import('pages/NAAC/OthersComponent.vue'), name: 'others' },
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
