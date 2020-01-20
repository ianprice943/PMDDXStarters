<template>
  <div id="sidebar">
    <!--TODO Routing-->
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Bulbasaur', params: { pokemon: 'Bulbasaur' }}">Bulbasuar</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Charmander', params: { pokemon: 'Charmander' }}">Charmander</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      
    }
  }
</script>

<style scoped>
  #sidebar {
    background-color: #FF3A10;
    color: #000;
    display: flex;
    justify-content: left;
    width: 20%;
    margin: 1em 0 1em .5em;
  }
  ul {
    list-style-type: none;
    text-align: left;
  }
</style>