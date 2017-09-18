<template>
<div class="ordertab">
  <el-table
        :data="accountList"
        border
        style="width:100%"
        >
        <el-table-column
      label="序号"
      align="center"
      show-overflow-tooltip>
                                                                                                                                                                                          
      <template scope="scope">
        <span>
        {{scope.$index+1}}
        </span>
      </template>
    </el-table-column>
        <el-table-column
        class="fonts"
        v-for="(val,key) in titleList"
        v-if="key!='benefitWays'"
        :label="titleList[key][0]"
        :prop="key"
        align="center"
        width="80"
        show-overflow-tooltip
        >
        </el-table-column>
        
         <el-table-column
      :label="titleList.benefitWays[0]"
      align="center">                                                                                                                                                                                 
      <template scope="scope">
      <span v-for="(val, key) in accountList[scope.$index].benefitWays[0]" v-if="key === 'remark'">
      {{val}}
      </span>
      </template>
    </el-table-column>
     <el-table-column
      :label="titleList.benefitWays[1]"
      align="center">                                                                                                                                                                                 

       <template scope="scope">
       <span>{{accountList[scope.$index].salePrice}}</span>
      
      </template>
    </el-table-column>

     <el-table-column
      label="客服操作"
      width="150"
      align="center">
                                                                                                                                                                                          
      <template scope="scope">
        <el-button size="small" @click="changes('service')">编辑</el-button>
        <el-button type="danger" size="small">退货</el-button>
      </template>
    </el-table-column>

    <el-table-column
      label="商家操作"
      width="150"
      align="center">

      <template scope="scope">
        <el-button size="small" @click="changes('shop')">编辑</el-button>
        <el-button type="danger" size="small">退货</el-button>
      </template>
    </el-table-column>
        </el-table>

 <el-dialog title="编辑" :visible.sync="dialogVisible" style="width: 1000px;margin-left: 200px;">
      <dialogs></dialogs>
  </el-dialog>
  
</div>
</template>
<script>
    import dialogs from '../dialog/dialog.vue'
    import {mapActions, mapState} from 'vuex'
    import {orderList, account} from '../../assets/js/modules.js'
    export default {
      mounted () {
        this.accountSearch()
      },
      created () {
        // axios.get('/wan/api').then((successData) => {
        //   console.log(successData)
        // })
      },
      computed: mapState({
        accountList: ({account}) => account.data
      }),
      components: {
        dialogs
      },
      methods: {
        ...mapActions(['setEditType', 'accountSearch']),
        changes (val) {
          this.dialogVisible = true
          // this.changeType(val)
          this.$store.dispatch({
            type: 'setEditType',
            editType: val
          })
          // console.log(this.$store.state.order.type)
        }
      },
      data () {
        return {
          dialogVisible: false,
          sta1: true,
          sts1: true,
          orderList: orderList,
          titleList: account
        }
      }
    }
</script>
<style>
.el-table .cell{
white-space: inherit;
}
</style>