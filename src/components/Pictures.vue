<template>
    <div id="picture">
        <div class="pokemonPicture">
            <figure>
                <img v-bind:src="getPokemonURL(curPokemon)" v-bind:alt="curPokemon">
            </figure>
        </div>
        <div class="typePictureCol">
            <div class="typePictureRow">
                <figure v-for="type in curPokemonTypes" v-bind:key="type">
                    <img v-bind:src="getTypeURL(type)" v-bind:alt="type">
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pictures',
        props: {
            curPokemon: String,
            curPokemonTypes: Array,
        },
        methods: {
            getPokemonURL: function (name) {
                return require('../assets/' + name + ".png");
            },
            getTypeURL: function (type) {
                return require('../assets/' + type + ".gif");
            }
        }
    }
</script>

<style scoped>
    #picture {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    figure {
        display: flex;
        margin: 0 .5em 0 0;
    }
    .pokemonPicture {
        margin: auto 0;
    }
    .typePictureCol {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .typePictureRow {
        display: flex;
        flex-direction: row;
    }
</style>