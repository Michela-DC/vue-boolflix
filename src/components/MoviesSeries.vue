<template>
    <div class="card">
        <figure v-if="item.poster_path == null" class="no-img">
            poster not available
        </figure>
        <figure v-else class="poster-wrapper">
            <img :src="`https://image.tmdb.org/t/p/w200/${item.poster_path}`" alt="">
        </figure>

        <!-- se item.title ha un valore allora stampo il titolo dei film dato che hanno la proprietá item.title, altrimenti stampo titolo serie -->
        <!-- v-if="item.title" é la stessa cosa di dire v-if="item.title !== undefined" -->
        <p v-if="item.title" class="title">
            {{item.title}}
        </p>
        <p v-else class="title">
            {{item.name}}
        </p>

        <p v-if="item.original_title" class="original-title">
            {{item.original_title}}
        </p>
        <p v-else class="original-title">
            {{item.original_name}}
        </p>

        <p class="language">
            Language {{getFlag(item.original_language)}}
        </p>

        <div class="vote-wrapper">
            <!-- {{vote}} -->
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
</template>

<script>
import getUnicodeFlagIcon from 'country-flag-icons/unicode' //questa libreria non può essere usata direttamente dentro il template

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
    border: 1px solid white;
    // min-height: 100px;
    width: 200px;

    .original-title{
        font-style: italic;
        color: lightblue;
    }
}

.vote-wrapper{
    display: flex;
    gap: 5px;

    .full-star{
        color: gold;
    }
}

// Per recuperare item.title e item.name potrei anche fare
// - nei methods
// title: function (item) {
//         if(item.title !== undefined){
//             return item.title
//         }

//         return item.name;
//     }
// }
// oppure con operatore logico ||
// title: function (item) {
//     return this.item.name || this.item.name
//    }
//},

// - poi nel template
//     <div class="title">
//         <div class="type">
//         </div>
//         {{title(item)}}
//     </div>
</style>
