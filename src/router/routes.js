
export default [
  {
    path: '/',
    component: () => import('layouts/default')
  },
  {
    path: '/table',
    component: () => import('pages/table')
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
