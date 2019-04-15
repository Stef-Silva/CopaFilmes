import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('../navmenu/navmenu.vue.html'),
        ListComponent: require('../filmeslist/filmeslist.vue.html'),
        WinnersComponent: require('../winners/winners.vue.html')
    }
})
export default class AppComponent extends Vue {
    
}
