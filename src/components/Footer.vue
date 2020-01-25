<template>
  <div id="footer-content">
    <span>Written in VueJS by Ian Price. </span>
    <span v-if="showEmail">Please email me your feedback and suggestions at captainprice943@gmail.com. </span>
    <span>This website is in no way involved with The Pokemon Company, Gamefreak, or Nintendo. </span>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        showEmail: false
      }
    }
  }
</script>

<style scoped>
  #footer-content {
    margin: 0 auto;
    font-size: .75em;
    padding-top: 1em;
  }
</style>