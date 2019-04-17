import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        ListComponent: require('../filmeslist/filmeslist.vue.html')        
    }
})
export default class AppComponent extends Vue {
    
}
