<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html,body,#app{
width:100%;
height:100%;
}
.titleinfo{
      position:fixed;
      top:10px;
      left:248px;
      color:#fff;
      z-index:999;
      font-size:30px;
}
</style>
