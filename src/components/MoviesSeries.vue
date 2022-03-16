<template>
    <div class="movies-container">
        <div class="movie-card" v-for="movie in filteredMovies" :key="movie.id">
            <div class="title">
                {{movie.title}}
            </div>

            <div class="original-title">
                {{movie.original_title}}
            </div>

            <div class="language">
                {{movie.original_language}}
                {{getFlag(movie.original_language)}}
            </div>

            <div class="vote">
                {{movie.vote_average}}
            </div>

        </div>
    </div>
</template>

<script>
import state from '../store.js'
import getUnicodeFlagIcon from 'country-flag-icons/unicode' //questa libreria non può essere usata direttamente dentro il template

export default {
    name: 'MoviesSeries',
    methods: {
        // creo funzione per usare la libreria delle bandiere
        getFlag: function (unicode) {
            // dato che l'unicode ufficiale della Gran Bretagna non è en ma gb, allora specifico che quando lo trova deve diventare gb
            if(unicode == 'en') {
                unicode = 'gb';
            }
            return getUnicodeFlagIcon (unicode);

        }
    },

    computed: {
        filteredMovies: function () { 
            return state.movies.filter(movie => {
                return movie.title.toLowerCase().includes(state.searchInput.toLowerCase());
            })
        },
    }

}

</script>

<style lang="scss" scoped>
.movies-container{
    height: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2%;

    .movie-card{
        border: 1px solid white;
        min-height: 100px;
        width: calc(98% / 5);
    }
}

</style>