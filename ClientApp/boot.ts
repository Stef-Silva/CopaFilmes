import './css/site.css';
import 'bootstrap';
import ElementUi from 'element-ui';
import Vue from 'vue';
import VueRouter from 'vue-router';
//const EventBus = new Vue();
//export default EventBus;

Vue.use(VueRouter);
Vue.use(ElementUi);

const routes = [
    { path: '/', component: require('./components/home/home.vue.html') },
    { path: '/filmeslist', component: require('./components/filmeslist/filmeslist.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
