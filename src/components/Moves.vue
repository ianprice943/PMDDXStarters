<template>
    <div id="moves">
        <div>
            <h3>Moves</h3>
        </div>
        <div>{{ fullList }}</div>
        <div v-for="(attributes, move) in fullList" v-bind:key="move" v-bind:value="attribues">
            <div>
                <p>{{ move }}</p>
                <p>{{ attributes }}</p>
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
        moves: function () {

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
        }
    },
    beforeMount() {
        this.assignMoveData(this.curMoves);
    }
}
</script>

<style scoped>

</style>