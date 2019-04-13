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
    filmes = [];
    created(){
        axios.get('https://copadosfilmes.azurewebsites.net/api/filmes')
        .then(response => {
            this.forecasts = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }    
    sendFilmes(){
        if(this.filmes.length == 0){
            alert('Não há filmes selecionados!!!')
        }else if(this.filmes.length > 8){
            alert('O número de filmes selecionados ultrapassou!!!')
        }else if(this.filmes.length > 0 && this.filmes.length < 8){
            alert('Selecionar 8 filmes!')
        }else{
            console.log('POST')
            console.log(this.filmes)
            console.log(this.filmes.length)

            console.log('vai fazer o post');
            // Fazer o POST
            axios.post('http://localhost:65332/campeonato/index')
            .then(response => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
            console.log('Fez!Mas não sei se chega até aqui')
        }
        console.log('Fim do método')        
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