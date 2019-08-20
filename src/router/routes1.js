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

]
