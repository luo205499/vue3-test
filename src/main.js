import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementUI, {Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (localStorage.getItem('user')) {  // 通过vuex state获取当前的token是否存在
            next();
        } else {
            Message({
                message: "您未登录，请登录!",
                type: "warning"
            })
            next({
                path: '/',
            })
        }
    } else {
        next();
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
