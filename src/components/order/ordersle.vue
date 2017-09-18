<template>
<div class="ordersle">
<el-form :inline="true">
<label for="" class="fonts">订单状态</label>
<el-select size="small" v-model="conditions.ordervalue" placeholder="请选择" >
    <el-option
      v-for="(val,key) in orderStatus"
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

  <label for="" class="fonts">优惠方式</label>
<el-select size="small" v-model="conditions.favorvalue" placeholder="请选择" >
    <el-option
      v-for="(val,key) in youhui"
      :key="key"
      :label="val"
      :value="key">
    </el-option>
  </el-select>

<label for="" class="fonts">支付时间</label>
    <el-date-picker
    v-model="conditions.timesvalue"
      type="datetime"
      placeholder="选择日期时间"
      size="small">  
    </el-date-picker>
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
            favorvalue: '',
            payvalue: '',
            timesvalue: '',
            guanvalue: ''
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
          youhui: {
            1: '优惠券',
            2: '免息卷'
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
</style>