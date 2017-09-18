<template>
<div class="zhuce">
<div class="vip">
<div class="headers">
<span>></span>
<span>会员注册</span>
<span></span>
</div>
<div class="cont">
<div class="phone">
<input type="text" placeholder="手机号" v-model="phoneval" @focus="state=true" @blur="blu()" @keyup="keys()">
<span class="fonts">{{phones}}</span>
</div>
<div class="yan">
<input type="text" placeholder="验证码" v-model="yanval"><button :disabled="yanstate" @click="getyan()">{{vals}}</button>
</div>
</div>

<div class="btn">
<mt-spinner type="fading-circle" class="load" v-show="status" color="#26a2ff"></mt-spinner>
<input type="button" value="注册" :disabled="state" @click="btn()">
</div>

</div>
</div>
</template>
<script>
    import Vue from 'vue'
    import {Spinner} from 'mint-ui'
    Vue.component('mt-spinner', Spinner)
    export default {
      data () {
        return {
          status: false,
          phoneval: '',
          yanstate: true,
          state: false,
          yanval: '',
          vals: '获取验证码',
          str: '',
          phones: '输入手机号'
        }
      },
      methods: {
        keys () {
          if (/^([0-9]{11})?$/.test(this.phoneval) && this.phoneval !== '') {
            this.state = false
            this.yanstate = false
          } else {
            this.state = true
            this.yanstate = true
          }
        },
        getyan () {
          this.yanstate = true
          let i = 60
          let that = this
          let id = setInterval(function () {
            if (i === 30) {
              var strs = ''
              for (var j = 0; j < 4; j++) {
                var x = Math.floor(Math.random() * 26)
                strs = strs + String.fromCharCode(65 + x)
              }
              that.str = strs
              alert('验证码:' + strs)
            }
            i--
            that.vals = i + 's后重新获取'
            if (i <= 0) {
              that.vals = '验证码'
              that.yanstate = false
              clearInterval(id)
            }
          }, 100)
        },
        blu () {
          // if (/^([0-9]{11})?$/.test(this.phoneval) && this.phoneval !== '') {
          //   this.state = false
          //   this.yanstate = false
          // } else {
          //   this.state = true
          //   this.yanstate = true
          // }
          if (!/^([0-9]{11})?$/.test(this.phoneval)) {
            this.phones = '手机格式有误'
          } else {
            this.phones = ''
          }
        },
        btn () {
          if (this.phoneval === '' && this.yanval === '') {
            alert('请先输入手机号注册')
            return false
          }
          if (this.phoneval && this.yanval === '') {
            alert('请输入验证码')
            return false
          }
          console.log(this.yanval)
          console.log(this.str)
          if (this.yanval !== this.str) {
            alert('验证码输入有误')
            return false
          } else {
            this.status = true
            this.state = true
            this.yanstate = true
            alert('注册成功')
          }
        }
      }
    }
</script>
<style lang="" scoped>
    .zhuce {
        width:100%;
        height:100%;
        position:relative;
        background:url("../../../static/images/body_bg.jpg");
        background-size:100% 100%;
    }
    .vip {
      background:#fff;
        width:300px;
        height:400px;
        position:absolute;
        left:50%;
        top:50%;
        margin-top:-150px;
        margin-left:-200px;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .headers {
        width:100%;
        height:40px;
        background:#999;
        display:flex;
        justify-content:space-between;
        color:#fff;
    }
    .cont {
        width:95%;
        height:60px;
        border:1px solid #ccc;
        margin-top:50px;
    }
    .phone, .yan {
        width:100%;
        height:50%;
        display:flex;
    }
    .phone span, .yan span {
            flex:3;
            height:100%;
           
        }
    .phone  input, .yan input{
            flex:7;
            height:95%;
            border:none;
            outline:none;
        }
    .btn {
        width:95%;
        height:30px;
        margin-top:30px;
        display:flex;
        position:relative;

    }
    .load {
      position:absolute;
      left:45%;
      top:-30px;
    }
    .btn input{
         border:1px solid #000;
         width:100%;
         height:100%;
         border-radius:10px;
         text-align:center;
         line-height:30px;
         outline:none;
    }
    .fonts{
      color:#ccc;
      font-size:.8rem;
    }
</style>