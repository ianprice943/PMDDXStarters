<template>
  <div id="pokemon">
    <h2>{{ pokemon }}</h2>
    <Pictures v-bind:curPokemon=pokemon v-bind:curPokemonTypes=types />
    <p v-for="ability in abilities" v-bind:key="ability">{{ ability }}</p>
    <p v-for="move in moves" v-bind:key="move">{{ move }}</p>
  </div>
</template>

<script>
  import pokemonJSON from '../../public/pokemon.json';
  import Pictures from './Pictures.vue';
  //import abilitiesJSON from '../../public/abilities.json';
  //import movesJSON from '../../public/moves.json';
  export default {
    name: 'Pokemon',
    components: {
      Pictures,
    },
    props: {
      pokemon: String
    },
    watch: {
      pokemon: function () {
        this.assignPokemonData();
      }
    },
    data() {
      return {
        types: [],
        abilities: [],
        moves: []
      }
    },
    methods: {
      assignPokemonData: function () {
        let name = this.pokemon;
        this.types = pokemonJSON.pokemon[name].type;
        this.abilities = pokemonJSON.pokemon[name].ability;
        this.moves = pokemonJSON.pokemon[name].moves;
      },
    },
    beforeMount() {
      this.assignPokemonData();
    }
  }
</script>

<style scoped>
  #pokemon {
    padding: 0 1em;
  }
</style>