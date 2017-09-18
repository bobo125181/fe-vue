周报

1. let const 
在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”
let不允许在相同作用域内，重复声明同一个变量,不能在函数内部重新声明参数.  let有块级作用域
const 声明一个只读的常量,一旦声明，常量不能改变

2.promise
promise对象是一个构造函数,用来生成Promise实例,用于异步操作，
可以用then方法分别指定Resolved状态和Rejected状态的回调函数。

3.async
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

4.webpack
下载webpack包 
//全局安装
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
建立webpack-config.js 规定生成文件路径
module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },



  5.vue 是一个允许采用简洁的模板语法来声明式的将数据渲染进 DOM

    声明式渲染 data:{msg:"123"}  页面上{{msg}}
    条件与循环 v-for ="(v,k) in data" v-if=""
    v-model不会在 ime 输入中得到更新。如果你也想实现更新，请使用 input事件。
    class 与 style 绑定
    v-bind:class 指令可以与普通的 class 属性共存
    v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }
    v-on用于绑定事件


    生命周期
    beforeCreate  创建前状态
    created   创建完毕状态
    beforeMount  挂载前状态
    mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
    beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容


    组件
    父组件向子组件传值，在子组件中用props来操作
首先父组件页面，有个子组件<A   msg="我是你父组件里面的文字"></A>
那么子组件js里面要写props=['msg']  .这个msg必须是上面父组件里面的那个名字。然后你就可以在子组件里面通过this.msg获取到里面的那个"我是你父组件里面的文字",，并且在页面中直接写{{msg}}而data里面没有初始化定义，也是可以正确的显示出-我是你父组件里面的文字-

子组件向父组件传参。在子组件里面利用this.$emit(父组件里的一个命名好的元素,子组件里的一个参数)；把这个参数的利用那个名字传到父组件中。
首先父组件页面<A   v-on:child-tell-me="hanshu"></A>  这个child-tell-me是可以自己起的名字，不一样非要click这样的鼠标事件.
那么子组件js里面要写。this.$emit(child-tell-me,this.name)这个this.name就是你想传过去的值。

    路由
    <router-view>渲染 <router-view>
    </router-link></router-link> 跳转 v-link

    this.$router.push() 



    fetch 请求

    fetch(url).then(function(response) {
    return response.json();
    }).then(function(data) {
  console.log(data);
    }).catch(function(e) {
  console.log("Oops, error");
    }); 




脚手架
npm install vue-cli -g
vue init webpack fe-vue
