
const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/Index.vue') },
      { path: 'test', component: () => import('../pages/Index2.vue'), name: 'test' }
    ]
  }
]

routes.push({
  path: '*',
  component: () => import('../pages/Error404.vue')
})

export default routes
