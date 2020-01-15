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
</script>

<style scoped>
    .pokemon {
        padding: 0 1em;
    }
</style>