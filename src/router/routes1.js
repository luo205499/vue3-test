export default[
    {
      path: '/',
      component: () =>
          import ('../views/Login'),
      name: 'Login',
    },{
      path: '*',
      component: () =>
          import ('../components/pageNotFound'),
      name: 'pageNotFound',
    },{
      path: '/PageIndex',
      component: () =>
          import ('../views/PageIndex'),
      name: 'PageIndex',
    },
]
