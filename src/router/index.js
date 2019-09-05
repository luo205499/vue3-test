import VueRouter from 'vue-router';
import Vue from 'vue';
import routes1 from './routes1';
import routes2 from './routes2';
Vue.use(VueRouter);
const baseRoutes = [];
const routes = baseRoutes.concat(routes1, routes2);
export default new VueRouter({
    // mode: 'history',//去除访问路径“#”
    // mode: 'abstract',
    mode: 'hash',
    routes,
});
