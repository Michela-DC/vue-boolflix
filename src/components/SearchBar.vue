<template>
    <div class="searchbar-wrapper" >
        <input type="text" placeholder="Cerca un film o una serie TV" v-model="searchInput">
        <!-- al click sul mouse faccio partire la funzione che se vede che c'è sritto qualcosa nell'input fa la chiamata al server -->
        <button class="btn-search" @click="getMovies">Search</button>
    </div>
</template>

<script>
import state from '../store.js';
import axios from 'axios'

export default {
    name: 'SearchBar',
    data () {
        return {
            searchInput: '',
            baseURL: 'https://api.themoviedb.org/3',
        }
    },

    methods: {
        getMovies: function () {
            // la funzione che fa la chiamata la faccio partire solo se è stato digitato qualcosa nell'input
            if(this.searchInput !== '') {
                axios.get(`${this.baseURL}/search/movie`, {
                    params: {
                        api_key: '9857cfb37fc41b760e69c70f6d75b517',
                        query: this.searchInput,
                    }
                })
                .then (res => {
                    console.log(res, res.data);
                    // invece di salvarlo dentro a this.movies lo salvo dentro a state.movies ovvero dentro l'array movies che è in store.js e in questo modo rendo l'array accessibile anche ad altri componenti
                    state.movies = res.data.results;
    
                    console.log('dentro state.movies =', state.movies);
    
                })
    
                //recupero errori o risposte negative del server
                .catch( err => {
                    console.warn(err.response);
                    // se la pagina va in errore resetto l'album e potrei anche mostrare un messaggio di errore
                    state.movies = [];
                })
            } 
        },

    },

    computed: {

        // creo la funzione che copia dentro a state.input quello che é stato inserito nell'input cosí viene salvato dentro store.js e posso usarlo anche in altri componenti
        copyIntoStore: function () {
            state.searchInput = this.searchInput;
            return state.searchInput;
        },
    }

}
</script>

<style lang="scss" scoped>

.searchbar-wrapper{

    input{
        width: 15rem;
        height: 27px;
        padding: 0 10px;
        border-radius: 5px;
    }

    .btn-search{
        margin-left: 5px;
        height: 27px;
        background-color: transparent;
        padding: 0 10px;
        color: white;
        border: 2px solid white;
        border-radius: 5px;
    }
}

</style>