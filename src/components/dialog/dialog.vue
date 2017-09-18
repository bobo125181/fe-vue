<template>
<div class="dialog">
{{type}}
  <el-row v-if="type === 'service'">
   <span for="">收货人</span><el-input class="wids" size="small"></el-input>
  </el-row>
  <el-row v-else>
   <span for="">物流公司</span><el-input class="wids" size="small"></el-input>
  </el-row>
  <el-row v-if="type === 'shop'">
   <span for="">收货地址</span><el-input class="wids" size="small"></el-input>
  </el-row>
   <el-row v-else>
   <span for="">物流单号</span><el-input class="wids" size="small"></el-input>
   </el-row>
    <el-row>
    <span for="">备注</span><el-input class="wids" size="small"></el-input>
    </el-row>
    <span slot="footer" class="dialog-footer">
    <el-button @click="quxiao">取 消</el-button>
    <el-button type="primary">确 定</el-button>
  </span>
</div>
</template>
<script>
    import {mapState} from 'vuex'
    export default {
      computed: mapState({
        type: ({order}) => order.type
      }),
      methods: {
        quxiao () {
          this.$emit('qus')
        }
      }
    }
</script>
<style scoped>
.el-row{
    margin-top:15px;

}
.el-row span {
    display:inline-block;
    width:60px;
}
.wids{
    width:150px;
    margin-left:30px;
}
</style>
