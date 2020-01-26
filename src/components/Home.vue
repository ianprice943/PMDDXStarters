<template>
  <div class="home">
    <figure>
      <img src="..\assets\PMDRTDXLogo.png" alt="Pokemon Mystery Dungeon Rescue Team DX Logo">
    </figure>
    <h2>Welcome to the PMDRTDX Starters App</h2>
    <p>
      This app is to help players understand who can be a starter in PMDDX, as well as what each starter Pokemon's ability and moves are.
    </p>
    <p>
      Choose a pokemon from the navigation menu in the top right to get started!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin: 0 auto;
  padding: 0 1em;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
