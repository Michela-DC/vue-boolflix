<template>
  <div id="app">
    <MainHeader/>
    <MainContent/>
  </div>
</template>

<script>

import MainContent from './components/MainContent.vue'
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'App',
  components: {
    MainContent,
    MainHeader
  }
}
</script>

<style lang="scss">
@import './assets/scss/common.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #141414;
}

body{
  &::-webkit-scrollbar{
        width: 7px;
  }

  &::-webkit-scrollbar-track{
    background-color: #141414;
  }

  &::-webkit-scrollbar-thumb{
      background-color: rgba(169, 169, 169, 0.3);
      border-radius: 10px;
  }
}
</style>

