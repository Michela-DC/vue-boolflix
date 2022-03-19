<template>
    <div class="card">
        <!-- <div class="poster" :style="`{ background-image: url('+require(https://image.tmdb.org/t/p/w185/${item.poster_path})+'); }`"></div> -->
        <figure v-if="item.poster_path == null" class="poster-wrapper no-img">
            <img class="poster" src="../assets/img/logo_boolflix.jpeg" alt="">
        </figure>
        <figure v-else class="poster-wrapper">
            <img class="poster" :src="`https://image.tmdb.org/t/p/w185/${item.poster_path}`" alt="">
        </figure>

        <div class="movie-info">
            <!-- se item.title ha un valore allora stampo il titolo dei film dato che hanno la proprietá item.title, altrimenti stampo titolo serie -->
            <!-- v-if="item.title" é la stessa cosa di dire v-if="item.title !== undefined" -->
            <p v-if="item.title" class="title">
                <span>Titolo: </span>
                {{item.title}}
            </p>
            <p v-else class="title">
                <span>Titolo: </span>
                {{item.name}}
            </p>

            <p v-if="item.original_title" class="original-title">
                <span>Titolo originale: </span>
                {{item.original_title}}
            </p>
            <p v-else class="original-title">
                <span>Titolo originale: </span>
                {{item.original_name}}
            </p>

            <div class="language">
                <div>Lingua: </div>

                <div v-if="controlFlag(item.original_language)" class="flag" >
                    {{getFlag(item.original_language)}}
                </div>
                <div v-else class="no-flag" >
                    {{getFlag(item.original_language)}}
                </div>
            </div>


            <div class="vote-wrapper">
                <!-- {{vote}} -->
                <span>Voto:</span>
                <div class="vote" v-for="n in 5" :key="n">
                    <!-- posso usare il binding sulla classe -->
                    <i class="fa-star" :class="n <= vote ? 'fa-solid' : 'fa-regular' "></i>
                    <!-- oppure con v-if -->
                    <!-- <div v-if="n <= vote" class="full-stars">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-else class="empty-stars">
                        <i class="fa-regular fa-star"></i>
                    </div> -->
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode' //questa libreria non può essere usata direttamente dentro il template
import { hasFlag } from 'country-flag-icons'

export default {
    name: 'MoviesSeries',
    props: {
        item: {
          type: Object,
          require: true,
        },
    },
    methods: {
        // creo funzione per usare la libreria delle bandiere
        getFlag: function (unicode) {
            // dato che l'unicode ufficiale della Gran Bretagna non è en ma gb, allora specifico che quando lo trova deve diventare gb
            if(unicode == 'en') {
                unicode = 'gb';
            }
            return getUnicodeFlagIcon (unicode);
        },

        controlFlag: function (unicode) {
            // gli unicode sono maiuscoli quindi, dato che l'api li fornisce in minuscolo, per fare il controllo li devo trasformare in maiuscolo
            if(unicode == 'en') {
                unicode = 'GB';
            }

            return hasFlag(unicode.toUpperCase());
        }
    },

    computed: {
        vote: function () {
            return Math.ceil(this.item.vote_average / 2);
        }
    }
}

</script>

<style lang="scss" scoped>

.card{
    border: 2px solid black;
    background-color: black;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 0.9rem;
    margin-bottom: 12px;
}

.poster{
    width: 185px;
    display: block;
}

.no-img{
    height: 278px;
    width: 200px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.movie-info{
    width: 200px;
    height: 100%;
    padding: 15px;
    opacity: 0;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);

    p, .language{
        margin-bottom: 5px;
    }

    span, .language{
        color: red;
        font-weight: bold;
    }

    .vote-wrapper{
        display: flex;
        gap: 5px;

        .fa-star{
            color: gold;
        }
    }

    .language{
        display: flex;
        gap: 5px;

        .no-flag{
            background-color: white;
        }
    }

}

.card:hover .movie-info{
    opacity: 1;
}

@media screen and (max-width: 575px){
    .card{
        margin-bottom: 5px;
    }

    .poster-wrapper{
        height: 228px;
        display: flex;
        align-items: center;
    }

    .poster{
        width: 150px;
    }

    .no-img{
        width: 150px;
        height: 230px;
    }
}

</style>
