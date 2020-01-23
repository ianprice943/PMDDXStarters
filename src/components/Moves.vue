<template>
    <div id="moves">
        <div>
            <h3>Moves</h3>
        </div>
        <div v-for="(attributes, move) in fullList" v-bind:key="move">
            <div class="box-shadow" v-bind:class="getClassFromType(attributes)">
                <div class="move-title">{{ move }}</div>
                <div>{{ attributes.description }}</div>
                <div class="type-power-row">
                    <div>Type: {{ attributes.type }}</div>
                    <div>{{ attributes.power }} {{ attributes.powerpoints }}</div>
                </div>
                <div>Category: {{ attributes.category }}</div>
                <div>Base Accuracy: {{ attributes.accuracy }}</div>
                <div>Range: {{ attributes.range }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import movesJSON from '../../public/moves.json';
export default {
    name: 'Moves',
    props: {
        curMoves: Array,
    },
    watch: {
        curMoves: function () {
            this.assignMoveData(this.curMoves);
        }
    },
    data() {
        return {
            fullList: {},
        }
    },
    methods: {
        assignMoveData: function (curMoves) {
            this.fullList = {};
            curMoves.forEach(curMove => this.pushMoves(curMove));
        },
        pushMoves: function (curMove) {
            let attributes = movesJSON.moves[curMove];
            this.fullList[curMove] = attributes;
        },
        getClassFromType: function (attributes) {
            let type = attributes.type;
            type = type.toLowerCase();
            return type;
        }
    },
    beforeMount() {
        this.assignMoveData(this.curMoves);
    }
}
</script>

<style scoped>
    .move-title {
        font-size: 1.5em;
        font-weight: bold;
    }
    .box-shadow {
        margin: 1em 0;
        padding: .5em;
        border: 1px solid #000;
        border-radius: 5px;
        box-shadow: 4px 4px;
    }
    .type-power-row {
        display: flex;
        flex-direction: row;
    }
    .grass {
        background: #7BCE53;
    }
    .poison {
        background: #AF59A0;
    }
    .water {
        background: #399BFF;
    }
    .fire {
        background: #F75131;
    }
    .normal {
        background: #A7A090;
    }
    .electric {
        background: #FFC631;
    }
    .fighting {
        background: #C03028;
        color: #fff;
    }
    .steel {
        background: #B8B8D0;
    }
    .dark {
        background: #705847;
        color: #fff;
    }
    .ice {
        background: #98D8D8;
    }
    .psychic {
        background: #F85888;
    }
    .flying {
        background: #A890F0;
    }
    .dragon {
        background: #7038F8;
        color: #fff;
    }
    .rock {
        background: #B8A038;
    }
    .ground {
        background: #E0C068;
    }
</style>