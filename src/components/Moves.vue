<template>
    <div id="moves">
        <div>
            <h3>Moves</h3>
        </div>
        <div class="box-shadow" v-bind:class="getClassFromType(attributes)" v-for="(attributes, move) in fullList"
            v-bind:key="move">
            <div class="move-title">{{ move }}</div>
            <div>{{ attributes.description }}</div>
            <div><b>Type:</b> {{ attributes.type }}</div>
            <div><b>Powerpoints:</b> {{ attributes.powerpoints }}</div>
            <div><b>Category:</b> {{ attributes.category }}</div>
            <div><b>Range:</b> {{ attributes.range }}</div>
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
        box-shadow: 4px 4px #000;
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
    }
    .steel {
        background: #B8B8D0;
    }
    .dark {
        background: #705847;
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
    }
    .rock {
        background: #B8A038;
    }
    .ground {
        background: #E0C068;
    }
</style>