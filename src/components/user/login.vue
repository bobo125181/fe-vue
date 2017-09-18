<template>


 <!-- particles.js container -->
<div id="particles-js">

<div class="box">   
<h3>Wecash Mall</h3>
<div class="cont">
<section class="inp1" :class="{bors:status,errs1:er1}">
<div class="cont1">
<label for="" :class="{move:status}" v-show="has">用户名</label>
<input type="text" @focus="get()" @blur="lose()" v-model="val1">
</div>

</section>
<section class="inp1" :class="{bors:sta,errs2:er2}">
<div class="cont2">
<label for="" :class="{move:sta}" v-show="has2">密码</label>
<input type="text" @focus="get1()" @blur="lose1()" v-model="val2">
</div>

</section>
</div>

<div class="btn">

<a @click="tiao()">登录</a>

</div>

</div>




</div>
<!-- particles.js lib (JavaScript CodePen settings): https://github.com/VincentGarreau/particles.js -->


</template>

<script>
import '../../../static/js/particles.js'
// import fetcher from '../../assets/js/fetcher.js'
export default {
  mounted () {
    particlesJS.load('particles-js', '../../../static/particles.json', function () {
      console.log('json ruby')
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      val1: null,
      val2: null,
      status: false,
      sta: false,
      has: true,
      has2: true,
      er1: false,
      er2: false,
      canSubmit: true
    }
  },
  methods: {
    get () {
      this.status = true
    },
    get1 () {
      this.sta = true
    },
    lose () {
      this.status = false
      this.has = true
      if (this.val1 !== null) {
        this.er1 = false
        this.has = false
      }
      if (this.val1 === '') {
        this.has = true
      }
    },
    lose1 () {
      this.sta = false
      this.has2 = true
      if (this.val2 !== null) {
        this.er2 = false
        this.has2 = false
      }
      if (this.val2 === '') {
        this.has2 = true
      }
    },
    tiao () {
      // if (this.val1 !== null || this.val1 === '') {
      //   if (this.val2 !== null || this.val2 === '') {
      //     this.er2 = true
      //   } else {
      //     this.er2 = true
      //   }
      // } else {
      //   this.er1 = true
      // }
      // fetch('http://47.94.8.151:8081/login', 'POST', {name: 'zhangsan', age: 18})
      // .then((json) => {
      //   console.log(json)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
      // fetcher.post('http://47.94.8.151:8081/login', {
      //   username: 'zhangsan'
      // })
      if (!this.canSubmit) {
        return false
      }
      console.log(this.val1)
      if (this.val1 === '' || this.val1 === null) {
        this.er1 = true
        return false
      }
      if (this.val2 === '' || this.val2 === null) {
        this.er2 = true
        return false
      }
      this.$http.post('/wecashMarketSystem/auth/login', {
        username: this.val1,
        password: this.val2
      }).then((res) => {
        if (res.successful === '1') {
          this.canSubmit = false
          localStorage.setItem('user', this.val1)
          localStorage.setItem('market_TOKEN', res.data.headerValue)
          this.$router.push('/home/role')
        } else {
          this.canSubmit = true
        }
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ---- reset ---- */


#app{}

.bors{
  border-bottom:1px solid skyblue;
}
canvas {
  display: block;
  vertical-align: bottom;
}

/* ---- particles.js container ---- */

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/bg.jpg") no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
 
}

/* ---- stats.js ---- */

.count-particles{
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.js-count-particles{
  font-size: 1.1em;
}

#stats,
.count-particles{
  -webkit-user-select: none;
}

#stats{
  border-radius: 3px 3px 0 0;
  overflow: hidden;
}

.count-particles{
  border-radius: 0 0 3px 3px;
}
.box{
    width:500px;
    height:350px;
   background:rgba(0,0,0,.3);

    position:absolute;
    top:50%;
    left:50%;
    margin-top:-190px;
    margin-left:-250px;
    
}
.box h3{
    width:500px;
    height:100px;
    line-height:100px;
    text-align:center;
    color:#fff;
    font-weight:normal;
}
.move{
  position:absolute;
  transform:scale(0.74) translate(0,-28px);
  transition:transform .5s linear;
  font-size:16px;
  color:skyblue;
  font-weight:bold;
}
.errs1,.errs2 {
  border-bottom:1px solid red;
}
.errs1:after{
  content:"用户名不能为空";
  position:absolute;
  bottom:-20px;
  color:red;
  left:30%;

}
.errs2:after{
  content:"密码不能为空";
  position:absolute;
  bottom:-20px;
  color:red;
  left:30%;

}
.box .cont{
    width:300px;
    height:150px;
    margin:0 auto;
    box-sizing:border-box;
}
.inp1,.inp2{
    width:300px;
    height:50px;
    border-bottom:1px solid #fff;
    position:relative;
    color:#fff;
}
.font{
    color:#fff;
}
.bors{
  border-bottom:2px solid skyblue;
}

.inp1 .cont1,.cont2{
  position:absolute;
  bottom:0;
 
}
.cont input{
    outline:none;
    border:none;
    width:200px;
    color:#fff;
    background:rgba(0,0,0,0);
}
.btn{
    width:300px;
    height:50px;
    margin:0 auto;
}
.btn a{
    width:300px;
    height:40px;
    display:inline-block;
    background:skyblue;
    color:#fff;
    text-align:center;
    line-height:50px;
    border-radius:5px;
    text-decoration:none;
}
</style>
