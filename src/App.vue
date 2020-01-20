<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: 'app',
  components: {
    SideBar,
  },
  methods: {
    getPokemonJSON: () => {
      //TODO
    },
    getAbiliesJSON: () => {
      //TODO
    },
    getMovesJSON: () => {
      //TODO
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
}
body {
  margin: 0 !important;
}
</style>
