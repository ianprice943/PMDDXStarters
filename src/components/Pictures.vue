<template>
    <div id="picture">
        <figure>
            <img v-bind:src="getPokemonURL(curPokemon)" v-bind:alt="curPokemon">
        </figure>
        <figure v-for="type in curPokemonTypes" v-bind:key="type">
            <img v-bind:src="getTypeURL(type)" v-bind:alt="type">
        </figure>
    </div>
</template>

<script>
export default {
    name: 'Pictures',
    props: {
        curPokemon: String,
        curPokemonTypes: Array,
    },
    data() {
        return {
            pictureURL: String,
            typeURLs: [],
        }
    },
    methods: {
        getPokemonURL: function(name) {
            return require('../assets/' + name + ".png");
        },
        getTypeURL: function(type) {
            return require('../assets/' + type + ".gif");
        }
    }
}
</script>