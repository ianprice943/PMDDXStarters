<template>
    <div id="moves">
        <div>
            <h3>Moves</h3>
        </div>
        <div>{{ curMovesArr }}</div>
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
        curMoves: Object,
    },
    watch: {
        moves: function () {

        }
    },
    data() {
        return {
            fullList: [],
            curMovesArr: [],
        }
    },
    methods: {
        assignMoveData: function (curMoves) {
            this.fullList = [];
            this.curMovesArr = Array.from(curMoves);
            this.curMovesArr.forEach(curMove => this.pushMoves(curMove));
        },
        pushMove: function (curMove) {
            let attributes = movesJSON.moves[curMove];
            let moveObject = {};
            moveObject[curMove] = attributes;
            this.fullList.push(moveObject);
        }
    },
    beforeMount() {
        this.assignMoveData(this.curMoves);
    }
}
</script>

<style scoped>

</style>