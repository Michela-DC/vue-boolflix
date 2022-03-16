import Vue from 'vue' ;

const state = Vue.observable(
    {
        movies: [],
        searchInput: '',
    }
)

export default state;