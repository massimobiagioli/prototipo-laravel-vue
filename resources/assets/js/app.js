import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';
import Dashboard from '../components/Dashboard.vue';
import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import Signin from '../components/Signin.vue';

Vue.use(VueRouter);

export default Vue;

export var router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: app => app(App)
});