import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html'),
        ListComponent: require('../filmeslist/filmeslist.vue.html')
    }
})
export default class AppComponent extends Vue {
    
}
