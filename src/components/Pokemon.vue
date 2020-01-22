<template>
  <div id="pokemon">
    <h2>{{ pokemon }}</h2>
    <Pictures v-bind:curPokemon=pokemon v-bind:curPokemonTypes=types />
    <Ability v-bind:abilityNames=abilities />
    <Moves v-bind:curMoves=moves />
    <p v-for="move in moves" v-bind:key="move">{{ move }}</p>
  </div>
</template>

<script>
  import pokemonJSON from '../../public/pokemon.json';
  import Pictures from './Pictures.vue';
  import Ability from './Ability.vue';
  import Moves from './Moves.vue';
  export default {
    name: 'Pokemon',
    components: {
      Pictures,
      Ability,
      Moves
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
    width: 100%;
    text-align: left;
  }
</style>