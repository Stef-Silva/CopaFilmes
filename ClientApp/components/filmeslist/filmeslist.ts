import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

interface Filmes {
    id: string;
    titulo: string;
    ano: string;
    nota: string; 
    filmes: string;   
}

@Component
export default class FilmesListComponent extends Vue {
    forecasts: Filmes[] = [];   
    filmes:any[] = [];
    filmesToSend:any[] = [];

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
            // Array with strings to object            
            this.filmes.forEach(filme => {
                var filmeSpl = filme.split(' - ')                
                    var objFilme = {
                        id: filmeSpl[0],
                        titulo: filmeSpl[1],
                        ano: filmeSpl[2],
                        nota: filmeSpl[3]
                    }                
                this.filmesToSend.push(objFilme)                
            });            
            
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;',
                    "Access-Control-Allow-Origin": "*",
                }
            }

            // POST
            axios.post('http://localhost:65332/home/indexfrombody', JSON.stringify(this.filmesToSend), axiosConfig)
            .then(response => {
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })            
        }                
    }      
    data(){
        return{            
            filmes: []            
        }
    }  
}