import Vue from 'vue' ;

const state = Vue.observable(
    {
        movies: [],
        tvSeries: [],
        searchInput: '',
    }
)

export default state;