import Vue from 'vue' ;

const state = Vue.observable(
    {
        movies: [],
        tvSeries: [],
        searchInput: '',
        baseURL: 'https://api.themoviedb.org/3',
    },
)

export default state;

import axios from 'axios';

export function getData() {
    // la funzione che fa la chiamata la faccio partire solo se è stato digitato qualcosa nell'input
    // chiamata per i FILM ---------------------------------
    axios.get(`${state.baseURL}/search/movie`, {
        params: {
            api_key: 'b4627578657d378551ee9e5a127d725a',
            query: state.searchInput,
        }
    })
    .then (res => {
        console.log(res, res.data);
        // invece di salvarlo dentro a this.movies lo salvo dentro a state.movies ovvero dentro l'array movies che è in store.js e in questo modo rendo l'array accessibile anche ad altri componenti
        state.movies = res.data.results;
    })
    //recupero errori o risposte negative del server
    .catch( err => {
        console.warn(err.response);
        // se la pagina va in errore resetto l'album e potrei anche mostrare un messaggio di errore
        state.movies = [];
    })

    // chiamata per le SERIE TV ----------------------------
    axios.get(`${state.baseURL}/search/tv`, {
        params: {
            api_key: 'b4627578657d378551ee9e5a127d725a',
            query: state.searchInput,
        }
    })
    .then (res => {
        // invece di salvarlo dentro a this.movies lo salvo dentro a state.movies ovvero dentro l'array movies che è in store.js e in questo modo rendo l'array accessibile anche ad altri componenti
        state.tvSeries = res.data.results;
    })
    //recupero errori o risposte negative del server
    .catch( err => {
        console.warn(err.response);
        // se la pagina va in errore resetto l'album e potrei anche mostrare un messaggio di errore
        state.tvSeries = [];
    })
}