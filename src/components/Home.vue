<template>
  <div class="home">
    <h2>Welcome to the Pokemon Mystery Dungeon DX Starters App</h2>
    <p>
      This app is to help players understand who can be a starter in PMDDX, as well as what each starter brings to the table.
    </p>
    <p>
      Choose a pokemon in the side bar to get started!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
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
</style>
