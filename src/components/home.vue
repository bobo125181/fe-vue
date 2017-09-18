<template>
 <div id="home">
<headers></headers>
<menus></menus>
<router-view></router-view>
 </div>
</template>

<script>
import headers from './home/header'
import menus from './home/menu'
export default {
  components: {
    headers,
    menus
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
