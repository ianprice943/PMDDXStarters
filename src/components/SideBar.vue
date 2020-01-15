<template>
    <div id="sidebar">
        <!--TODO Routing-->
        <router-link :to="{ name: 'Home'}">User</router-link>
        <router-link :to="{ name: 'Bulbasaur', params: { Pokemon: Bulbasaur }}">Bulbasuar</router-link>
        <router-link :to="{ name: 'Charmander', params: { Pokemon: Charmander }}">Charmander</router-link>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {

    }
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bulbasaur',
      name: 'Bulbasaur',
      component: Pokemon
    },
   {
      path: '/Charmander',
      name: 'Charmander',
      component: Pokemon
    },
  ]
})
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
</style>