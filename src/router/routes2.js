export default[
    {
        path: '/Home',
        component: () => import ('../views/Home.vue'),
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            {
                path: '/page4',
                component: () => import ('../views/nav2/Page4.vue'),
                name: '页面4',
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            },
            {
                path: '/page5',
                component: () => import ('../views/nav2/Page5'),
                name: '页面5',
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            }
        ]
    },
    {
        path: '/Home',
        component: () => import ('../views/Home.vue'),
        name: '',
        iconCls: 'fa fa-music',
        leaf: true,//只有一个节点
        children: [
            {
                path: '/MusicRadios',
                component: () => import ('../views/nav3/MusicRadios.vue'),
                name: '热门电台',
                meta: {
                    requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
                },
            }
        ]
    },
]
