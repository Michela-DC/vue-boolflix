<template>
    <main>
        <div class="container">
            <h2>Movies</h2>
            <div class="cards-container">
                <MoviesSeries class="card" v-for="item in filteredMovies" :key="item.id" :item="item"/>
                <div v-if="filteredMovies.length == 0">
                    No results found
                </div>
            </div>

            <h2>TV Series</h2>
            <div class="cards-container">
                <MoviesSeries class="card" v-for="item in filteredTvSeries" :key="item.id" :item="item"/>
                <div v-if="filteredTvSeries.length == 0">
                    No results found
                </div>
            </div>
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
    // width: 90%;
    padding: 0 2%;
    height: 100%;

    .cards-container{
        display: flex;
        overflow-x: scroll;
        gap: 1%;
        margin-bottom: 20px;
        position: relative;

        &::-webkit-scrollbar{
            height: 10px;
        }

        &::-webkit-scrollbar-track{
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb{
            background-color: rgba(169, 169, 169, 0.3);
            border-radius: 10px;
        }
    }

}

@media screen and (max-width: 575px){
    .container {
        margin-top: 165px;
    }

    .cards-container{
        align-items: center;
    }

}

</style>