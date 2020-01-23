<template>
    <div id="ability">
        <div>
            <h3>Ability</h3>
        </div>
        <div id="ability-box" v-for="(description, name) in abilityDescriptions" v-bind:key="name">
            <div class="ability-title">{{ name }}</div>
            <div>{{ description }}</div>
        </div>
    </div>
</template>

<script>
import abilitiesJSON from '../../public/abilities.json';
export default {
    name: "Ability",
    props: {
        abilityNames: Array,
    },
    watch: {
        abilityNames: function() {
            this.getAbilities(this.abilityNames);
        }
    },
    data() {
        return {
            abilityDescriptions: {},
        }
    },
    methods: {
        getAbilities: function(abilityNames) {
            this.abilityDescriptions = {};
            abilityNames.forEach(abilityName => this.pushAbility(abilityName));
        },
        pushAbility: function(abilityName) {
            let description = abilitiesJSON.abilities[abilityName];
            this.abilityDescriptions[abilityName] = description;
        }
    },
    beforeMount() {
        this.getAbilities(this.abilityNames);
    }
}
</script>

<style scoped>
    #ability-box {
        margin: 1em 0;
        padding: .5em;
        border: 1px solid #000;
        border-radius: 5px;
        box-shadow: 4px 4px;
    }
    .ability-title {
        font-size: 1.5em;
        font-weight: bold;
    }
</style>