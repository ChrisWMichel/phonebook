
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import {routes} from './routes'
import Main from './components/Main'

Vue.use(VueRouter);

const router = new VueRouter({
   routes,
   // mode: 'history',
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }
        if(to.hash){
            return {selector: to.hash};
        }
        return {x: 0, y:0};
    }

});

Vue.filter('phone_check', function (phone) {
    return phone.replace(/[^0-9]/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
});

const app = new Vue({
    router,
    el: '#app',
    components:{
        appMain: Main
    }
});
