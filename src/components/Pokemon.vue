<template>
  <div class="pokemon">
    <h2>{{ pokemon }}</h2>
    <p>{{ type }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Pokemon',
    props: {
      pokemon: String
    },
    data() {
      return {
        pokemonJSON: Object,
        movesJSON: Object,
        abilitiesJSON: Object,
        type: [],
        ability: '',
        moves: []
      }
    },
    methods: {
      getPokemonJSON: function() {
        this.pokemonJSON = async () => {
          let json = await fetch('../public/pokemon.json').json();
          return json;
        };
      },
      getAbilitiesJSON: function() {
        this.abilitiesJSON = async () => {
          let json = await fetch('../public/abilities.json').json();
          return json;
        };
      },
      getMovesJSON: function() {
        this.movesJSON = async () => {
          let json = await fetch('../public/moves.json').json();
          return json;
        };
      },
      assignPokemonData: () => {
        const name = this.pokemon;
        this.type = this.pokemonJSON.pokemon[name].type;

      }
    },
    beforeMount() {
      this.getPokemonJSON();
      this.getAbilitiesJSON();
      this.getMovesJSON();
      this.assignPokemonData();
    }
  }
</script>

<style scoped>
  .pokemon {
    padding: 0 1em;
  }
</style>