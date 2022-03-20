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
    margin-top: 90px;
}

.container{
    padding: 0 30px;
    height: 100%;

    h2{
        margin-bottom: 1rem;
    }

    .cards-container{
        display: flex;
        gap: 1%;
        margin-bottom: 2.5rem;
        overflow-x: scroll;

        &::-webkit-scrollbar{
            height: 8px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: red;
            border-radius: 10px;
        }
    }
}

@media screen and (max-width: 575px){
    .container {
        margin-top: 100px;
        padding: 0 15px;
    }

    .cards-container{
        align-items: center;
    }

}

</style>