<template>
<div class="add">
<button @click="addNum">+1</button>
</div>
</template>
<script>
    import {mapActions} from 'vuex'
    export default {
      name: 'add',
      methods: {
        ...mapActions(['add']),
        addNum () {
          console.log(this.$store.state.order.count)
        }
      }
    }
</script>
<style lang="" scoped>
    button {
        width:50px;
        height:50px;
        font-size:16px;
    }
</style>