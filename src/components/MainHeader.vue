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

header{
    margin-bottom: 15px;
}

.header-container{
    background-color: black;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 30px;

    .title{
        color: red;
        text-transform: uppercase;
    }
}

@media screen and (max-width: 575px){
    .header-container{
        height: fit-content;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-start;
        justify-content: center;
        gap: 15px;
        padding: 20px 10px 35px 10px;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
        background: linear-gradient(to top, rgba(0,0,0,0), #000);
    }
}

</style>