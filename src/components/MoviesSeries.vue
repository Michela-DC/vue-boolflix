<template>
    <div class="cards-container">
        <div class="card" v-for="item in mergedFilters" :key="item.id">
            <div v-if="item.title" class="title">
                <div class="type">
                    Movie
                </div>
                {{item.title}}
            </div>
            <div v-if="item.name" class="title">
                <div class="type">
                    TV Series
                </div>
                {{item.name}}
            </div>

            <div v-if="item.original_title" class="original-title">
                {{item.original_title}}
            </div>
            <div v-if="item.original_name" class="original-title">
                {{item.original_name}}
            </div>

            <div class="language">
                Language {{getFlag(item.original_language)}}
            </div>

            <div class="vote">
                {{item.vote_average}}
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

        filteredTvSeries: function () { 
            return state.tvSeries.filter(series=> {
                return series.name.toLowerCase().includes(state.searchInput.toLowerCase());
            })
        },

        mergedFilters: function () {
            return this.filteredMovies.concat(this.filteredTvSeries);
        }
    }

}

</script>

<style lang="scss" scoped>
.cards-container{
    height: 100%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2%;

    .card{
        border: 1px solid white;
        min-height: 100px;
        width: calc(98% / 5);


        .original-title{
            font-style: italic;
            color: lightblue;
        }
    }
}

.type{
    font-size: 15px;
    color: lightgrey;
}

</style>