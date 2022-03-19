import Vue from 'vue' ;

const state = Vue.observable(
    {
        movies: [],
        tvSeries: [],
        searchInput: '',
        clickIndex: 0,
    },
)

export default state;