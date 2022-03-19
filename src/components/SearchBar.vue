<template>
    <div class="searchbar-wrapper" >
        <input type="text" placeholder="Cerca un film o una serie TV" v-model="searchInput" v-on:keyup.enter="setData">
        <!-- al click sul mouse faccio partire la funzione che se vede che c'è sritto qualcosa nell'input fa la chiamata al server -->
        <button class="btn-search" @click="setData">Search</button>
    </div>
</template>

<script>
import state from '../store.js';
import {getData} from '../store.js';

export default {
    name: 'SearchBar',
    data () {
        return {
            searchInput: '',
            baseURL: 'https://api.themoviedb.org/3',
        }
    },

    methods: {
        // creo la funzione che copia dentro a state.input quello che é stato inserito nell'input cosí viene salvato dentro store.js e posso usarlo anche in altri componenti
        setData: function () {
            state.searchInput = this.searchInput;
            
            getData(); // dopo che é stato modificato il valore di search invoco la funzione che fa la chiamata all'api e che ho messo nello store
        },
    },

}
</script>

<style lang="scss" scoped>

.searchbar-wrapper{

    input{
        width: 15rem;
        height: 1.8rem;
        padding: 0 10px;
        border-radius: 5px;
    }

    .btn-search{
        margin-left: 5px;
        height: 1.8rem;
        background-color: transparent;
        padding: 0 10px;
        color: white;
        border: 2px solid white;
        background-color: black;
        border-radius: 5px;

        &:hover{
            color: red;
            border: 2px solid red;
        }
    }
}

@media screen and (min-width: 576px) and (max-width: 768px){
       .searchbar-wrapper > input {
           width: 12rem;
       }
}

@media screen and (max-width: 575px){
    .searchbar-wrapper{
        display: flex;
        flex-direction: column;
        width: 18rem;
        gap: 15px;

        input {
            width: 100%;
        }

        .btn-search{
            width: 7rem;
            margin-left: 0;
            background-color: black;
        }
    }
}

</style>