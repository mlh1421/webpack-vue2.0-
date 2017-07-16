import style from './css/style.css';
import App from './components/App.vue';
import Vue from 'vue';
import router from './router/router.js'
new Vue({
    el:"#app",
    components: {
        my: App
    },
    router:router,
   //render: h => h(App) 
});


