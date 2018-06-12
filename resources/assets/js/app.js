
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
   routes,
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

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    router,
    el: '#app'
});
