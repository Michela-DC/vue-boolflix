<template>
    <main>
        <div class="container">
            <MoviesSeries/>
        </div>
    </main>
</template>

<script>
import MoviesSeries from './MoviesSeries.vue'

export default {
    name: 'MainContent',
    components: {
        MoviesSeries,
    },
}
</script>

<style lang="scss" scoped>

main{
    flex-grow: 1;
}

.container{
    margin: 0 auto;
    height: 100%;
}
</style>