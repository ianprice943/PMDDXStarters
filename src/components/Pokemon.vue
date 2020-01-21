<template>
  <div class="pokemon">
    <h2>{{ pokemon }}</h2>
    <p v-for="type in types" v-bind:key="type">{{ type }}</p>
    <p v-for="ability in abilities" v-bind:key="ability">{{ ability }}</p>
    <p v-for="move in moves" v-bind:key="move">{{ move }}</p>
  </div>
</template>

<script>
  import pokemonJSON from '../../public/pokemon.json';
  //import abilitiesJSON from '../../public/abilities.json';
  //import movesJSON from '../../public/moves.json';
  export default {
    name: 'Pokemon',
    props: {
      pokemon: String
    },
    data() {
      return {
        types: [],
        abilities: [],
        moves: []
      }
    },
    methods: {
      assignPokemonData: function() {
        const name = this.pokemon;
        this.types = pokemonJSON.pokemon[name].type;
        this.abilities = pokemonJSON.pokemon[name].ability;
        this.moves = pokemonJSON.pokemon[name].moves;
      }
    },
    beforeMount() {
      this.assignPokemonData();
    }
  }
</script>

<style scoped>
  .pokemon {
    padding: 0 1em;
  }
</style>