import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class WinnersComponent extends Vue {
    winners:any[] = []
    mounted () {
        
    }
    data(){
        return{
            winners:[]
        }
    }    
}