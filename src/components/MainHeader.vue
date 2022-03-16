<template>
    <header>
        <div class="header-container">
            <h1 class="title">Boolflix</h1>
            <SearchBar/>
        </div>
    </header>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
    name: 'MainHeader',
    components: {
        SearchBar,
    }

}
</script>

<style lang="scss" scoped>

.header-container{
    background-color: black;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    .title{
        color: red;
        text-transform: uppercase;
    }
}

</style>