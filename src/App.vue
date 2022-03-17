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
</style>

