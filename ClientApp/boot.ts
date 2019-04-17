import './css/site.css';
import 'bootstrap';
import ElementUi from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);
Vue.use(ElementUi);

const routes = [    
    { path: '/filmeslist', component: require('./components/filmeslist/filmeslist.vue.html') }    
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
