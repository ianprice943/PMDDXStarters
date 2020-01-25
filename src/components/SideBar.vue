<template>
  <div id="sidebar">
    <div class="sidebar-backdrop" v-on:click="closeSideBarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <figure>
          <img src="..\assets\Pokemon Mystery Dungeon Rescue Team DX Logo.png" alt="Pokemon Mystery Dungeon Rescue Team DX Logo">
        </figure>
        <slot>
          <nav>
            <ul v-on:click="closeSideBarPanel">
              <li>
                <router-link :to="{ name: 'Home'}">Home</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Bulbasaur'}">Bulbasuar</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Charmander'}">Charmander</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Squirtle'}">Squirtle</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Pikachu'}">Pikachu</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Meowth'}">Meowth</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Psyduck'}">Psyduck</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Machop'}">Machop</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Cubone'}">Cubone</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Eevee'}">Eevee</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Chikorita'}">Chikorita</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Cyndaquil'}">Cyndaquil</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Totodile'}">Totodile</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Treecko'}">Treecko</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Torchic'}">Torchic</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Mudkip'}">Mudkip</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Skitty'}">Skitty</router-link>
              </li>
            </ul>
          </nav>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import {store, mutations} from '../store'
  export default {
    name: 'SideBar',
    methods: {
      closeSideBarPanel() {
        mutations.toggleNav();
      }
    },
    computed: {
      isPanelOpen() {
        return store.isNavOpen
      }
    }
  }
</script>

<style scoped>
  figure > img {
    max-width: 100%;
    height: auto;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    overflow-y: auto;
    background-color: #130f40;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    width: 15%;
  }

  @media only screen and (max-width: 1023px) {
    .sidebar-panel {
      width: 25%;
    }
  }

  @media only screen and (max-width: 550px) {
    .sidebar-panel {
      width: 30%;
    }
  }

  @media only screen and (max-width: 500px) {
    .sidebar-panel {
      width: 40%;
    }
  }

  @media only screen and (max-width: 400px) {
    .sidebar-panel {
      width: 50%;
    }
  }

  ul {
    list-style-type: none;
    text-align: left;
  }

  a:link {
    color: #fff;
    text-decoration: none;
  }

  a:visited {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: #000;
    text-decoration: underline;
  }
</style>