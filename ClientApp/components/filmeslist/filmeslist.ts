import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

interface Filmes {
    id: string;
    titulo: string;
    ano: string;
    nota: string;    
}

@Component
export default class FilmesListComponent extends Vue {
    forecasts: Filmes[] = [];   
    created(){
        axios.get('https://copadosfilmes.azurewebsites.net/api/filmes')
        .then(response => {
            this.forecasts = response.data
        })
        .catch(error => {
            console.log(error)
        })
    } 
    mounted() {
        /*fetch('')
            .then(response => response.json() as Promise<Filmes[]>)
            .then(data => {
                this.forecasts = data;
            });*/
    }  
    data(){
        return{
            filmes: []
        }
    }  
}