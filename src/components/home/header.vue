<template>
<div class="title">
<h1>{{title}}</h1>
<div class="info"> 
<span>{{username}}</span>
<span @click="sub()">退出</span>
</div>
</div>
</template>
<script>
    import {mapState} from 'vuex'
    // import fetcher from '../../assets/js/fetcher.js'
    export default {
      data () {
        return {
          username: localStorage.user,
          canSubmit: true
        }
      },
      computed: mapState({
        title: ({title}) => title.title
      }),
      methods: {
        sub () {
          console.log(1)
          if (!this.canSubmit) {
            return false
          }
          this.canSubmit = false
          this.$http.post('/wecashMarketSystem/auth/logout', {
            username: this.val1,
            password: this.val2
          }).then((res) => {
            this.canSubmit = true
            if (Number(res.successful)) {
              this.canSubmit = false
              localStorage.removeItem('user')
              localStorage.removeItem('market_TOKEN')
              location.assign('/login')
            } else {
              this.$message(res.errorDescription)
            }
          }, () => {
            this.canSubmit = true
          })
        }
      }
    }
</script>
<style lang="" scoped>
    .title{
    position: fixed;
    top: 0;
    left: 240px;
    z-index: 5;
    width: 100%;
    height: 65px;
    color: #fff;
    line-height: 64px;
    background-color: #207fde;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.14);
   
    }
    .info{
      position:fixed;
      right:50px;
      top:0px;
    }
</style>