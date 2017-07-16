import hello from '../components/hello.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);     //不可少
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:hello
        }
    ]
})

