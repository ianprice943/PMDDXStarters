<template>
    <div class="pokemon">
        <h2>{{ pokemon }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Pokemon',
    props: {
        pokemon: String
    }
}
// pokemon.json generated at http://www.objgen.com/json/models/LB8
</script>

<style scoped>
    .pokemon {
        padding: 0 1em;
    }
</style>