import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
const EventBus = new Vue();

interface Filmes {
    id: string;
    titulo: string;
    ano: string;
    nota: string; 
    filmes: string;   
}

@Component
export default class FilmesListComponent extends Vue {
    EventBus:any;
    forecasts: Filmes[] = []
    filmes:any[] = []
    filmesToSend:any[] = []
    winners:any[] = []
 

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
            axios.post('http://localhost:5000/home/indexfrombody', JSON.stringify(this.filmesToSend), axiosConfig)
            .then(response => {
                console.log(response.data);
                this.filmes = [];
                this.forecasts = [];
                
                var json = JSON.stringify(response.data);
                /*converter json para lista de objetos*/
                var objs = JSON.parse(json);

                console.log(this.winners.length);

                for (let index = 0; index < objs.length; index++) {
                    const element = objs[index];
                    console.log(element);
                    this.winners.push(element)
                    /*var filme = {

                    }*/
                    
                }
                console.log(this.winners.length)
                

                /*var arrayJson = response.data
                console.log(arrayJson)
                var keys = Object.keys(response.data)
                
                var filme = arrayJson.reduce(function(filme: { [x: string]: any; }, dado: { titulo: string | number; nota: any; }){
                    filme[dado.titulo] = dado.nota;
                    
                    return filme;
                }, {})

                console.log(filme)
                this.winners.push(filme)
                // Consultar https://pt.stackoverflow.com/questions/215335/converter-json-em-objeto
                this.filmes = [];
                this.forecasts = [];
                //console.log(this.filmes)
                //console.log(typeof response)

                //this.winners.push(filme)
                //this.filmes.push(response)
                /*var objFilme1 = {
                    id: "abc",
                    titulo: "Teste",
                    ano: "2018",
                    nota: 2.5
                }
                this.winners.push(objFilme1)
                var objFilme2 = {
                    id: "def",
                    titulo: "Teste 2",
                    ano: "2019",
                    nota: 2.0
                }*/
                //this.winners.push(objFilme2)
                //console.log(this.winners)
                
                
            })
            .catch(function(error){
                console.log(error)
            })            
        }                
    }         
    data(){
        return{            
            winners: []            
        }
    }  
    
}