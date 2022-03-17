<template>
    <main>
        <div class="container">
            <h2>Movies</h2>
            <MoviesSeries class="card" v-for="item in filteredMovies" :key="item.id" :item="item"/>
            
            <h2>TV Series</h2>
            <MoviesSeries class="card" v-for="item in filteredTvSeries" :key="item.id" :item="item"/>
        </div>
    </main>
</template>

<script>
import MoviesSeries from './MoviesSeries.vue'
import state from '../store.js';

export default {
    name: 'MainContent',
    components: {
        MoviesSeries,
    },

    computed: {
        filteredMovies: function () { 
            return state.movies.filter(movie => {
                return movie.title.toLowerCase().includes(state.searchInput.toLowerCase());
            })
        },

        filteredTvSeries: function () { 
            return state.tvSeries.filter(series=> {
                return series.name.toLowerCase().includes(state.searchInput.toLowerCase());
            })
        },
    }
}
</script>

<style lang="scss" scoped>

main{
    flex-grow: 1;
    color: white;
}

.container{
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
</style>