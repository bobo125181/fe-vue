<template>
<div class="ordersle">
<el-form :inline="true">
<label for="" class="fonts">是否退货</label>
<el-select size="small" v-model="conditions.ordervalue" placeholder="请选择" >
    <el-option
      v-for="(val,key) in tui"
      :key="key"
      :label="val"
      :value="key">
    </el-option>
  </el-select>
<label for="" class="fonts">结算状态</label>
<el-select size="small" v-model="conditions.settleStatus" placeholder="请选择" >
    <el-option
      v-for="(val,key) in SettleStatus"
      :key="key"
      :label="val"
      :value="key">
    </el-option>
  </el-select>

  <label for="" class="fonts">发货商家</label>
<el-select size="small" v-model="conditions.Uservalue" placeholder="请选择" >
    <el-option
      v-for="(val,key) in shopUser"
      :key="key"
      :label="val"
      :value="key">
    </el-option>
  </el-select>
<div class="start">
<label for="" class="fonts">出货时间</label>
    <el-date-picker
    v-model="conditions.startvalue"
      type="datetime"
      placeholder="选择日期时间"
      size="small">  
    </el-date-picker>
    <label for="" class="fonts">至</label>
    <el-date-picker
    v-model="conditions.endvalue"
      type="datetime"
      placeholder="选择日期时间"
      size="small">  
    </el-date-picker>
</div>
<div class="tuis">
<label for="" class="fonts">退货时间</label>
    <el-date-picker
    v-model="conditions.tstartvalue"
      type="datetime"
      placeholder="选择日期时间"
      size="small">  
    </el-date-picker>
    <label for="" class="fonts">至</label>
    <el-date-picker
    v-model="conditions.tendvalue"
      type="datetime"
      placeholder="选择日期时间"
      size="small">  
    </el-date-picker>
</div>
<div class="inp">
<el-form-item label="发货商家" >
  <el-input size="small" v-model="conditions.busvalue" placeholder=""></el-input>
  </el-form-item>
  <el-form-item label="关键字">
  <el-input size="small" v-model="conditions.guanvalue" placeholder=""></el-input>
  </el-form-item>
  <el-form-item>
  <el-button type="primary" size="small" @click="handleSearch">搜索</el-button>
<el-button type="primary" size="small">重置</el-button>
</el-form-item>
</div>
  
</el-form>
</div>
</template>
<script>
    import {mapActions} from 'vuex'
    import {SettleStatus} from '../../assets/js/modules.js'
    export default {
      methods: {
        ...mapActions(['setConditions', 'accountSearch']),
        handleSearch () {
          this.setConditions(this.conditions)
          this.accountSearch()
        }
      },
      data () {
        return {
          conditions: {
            ordervalue: '',
            settleStatus: '',
            Uservalue: '',
            startvalue: '',
            endvalue: '',
            tstartvalue: '',
            tendvalue: ''
          },
          orderStatus: {
            1: '未支付',
            2: '支付失败',
            3: '审核中',
            4: '审核失败',
            5: '待发货',
            6: '已发货',
            7: '交易成功'
          },
          SettleStatus: SettleStatus,
          tui: {
            1: '是',
            2: '否'
          },
          shopUser: {
            1: '万达',
            2: '聚通达'
          }
        }
      }
    }
</script>   
<style lang="" scoped>
    .ordersle{
        padding:20px 0;
    }
    .fonts{
        color:#999;
        padding:0 8px;
        font-size:10px;
    }
    .inp{
        margin:10px 0;

    }
    .start{
      margin-top:20px;
      margin-bottom:20px;
    }
</style>