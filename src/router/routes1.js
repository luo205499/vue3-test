export default[
    {
        path: '/Login',
        component: () => import ('../views/Login.vue'),
        name: '',
        hidden: true
    },
    {
        path: '*',
        component: () => import ('../views/404.vue'),
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: () => import ('../views/Home.vue'),
        name: '我的快乐',
        iconCls: 'fa fa-heartbeat',//图标样式class
        children: [
            { path: '/HappyPassages',component: () => import ('../views/nav1/HappyPassages.vue'), name: '快乐段子' },
            { path: '/HappyPhoto', component: () => import ('../views/nav1/HappyPhoto.vue'), name: '图片快乐' },
            { path: '/HappyVideo', component: () => import ('../views/nav1/HappyVideo.vue'), name: '快乐视频' },
            { path: '/HappyMotionMap', component: () => import ('../views/nav1/HappyMotionMap.vue'), name: '快乐动图' },
        ]
    },
    {
        path: '/',
        component: () => import ('../views/Home.vue'),
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4',component: () => import ('../views/nav2/Page4.vue'), name: '页面4' },
            { path: '/page5',component: () => import ('../views/nav2/Page5'), name: '页面5' }
        ]
    },
    {
        path: '/',
        component: () => import ('../views/Home.vue'),
        name: '',
        iconCls: 'fa fa-music',
        leaf: true,//只有一个节点
        children: [
            { path: '/MusicRadios', component: () => import ('../views/nav3/MusicRadios.vue'), name: '热门电台' }
        ]
    },
]
