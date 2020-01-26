
const routes = [
  {
    path: '/',
    component: () => import('layouts/guest.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/input',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/inputmenu.vue') }
    ]
  },
  {
    path: '/datamenu',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/datamenu.vue') }
    ]
  },
  {
    path: '/dataminuman',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dataminuman.vue') }
    ]
  },
  {
    path: '/inputminuman',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/inputminuman.vue') }
    ]
  },
  {
    path: '/transaksi',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/transaksi.vue') }
    ]
  }
]
// Always leave this as last one

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '/inputdata',
    component: () => import('pages/Index.vue')
  })
}
export default routes
