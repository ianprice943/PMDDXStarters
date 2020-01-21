<template>
  <div id="app">
    <div id="header">
      <Title />
      <NavButton />
    </div>
    <div id="main">
      <SideBar />
      <router-view />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';
import Title from './components/Title.vue'
import Footer from './components/Footer.vue'
import NavButton from './components/NavButton.vue'

export default {
  name: 'app',
  components: {
    NavButton,
    SideBar,
    Title,
    Footer,
  },
  data() {
    return {
      pokemonJSON: "",
      movesJSON: "",
      abilitiesJSON: ""
    }
  },
  methods: {

  }
}
</script>

<style>
body {
  margin: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 2em;
}
#header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#main {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
}
#footer {
  display: flex;
  flex-direction: row;
}
</style>
