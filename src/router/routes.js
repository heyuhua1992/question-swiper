const routes = [
  {
    path: '/',
    component: resolve => require(['@/views/Index'], resolve)
  },
  {
    path: '/Ok',
    component: resolve => require(['@/views/Ok'], resolve)
  }
]

export default routes
