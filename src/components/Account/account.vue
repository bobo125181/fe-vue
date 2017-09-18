<template>
<div class="order">
<orderbtn></orderbtn>
<ordersle></ordersle>
<ordertab></ordertab>
<div class="pages">
 <el-pagination
      class="pagess"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next, total, jumper"
      :total="tolos">
    </el-pagination>

</div>
</div>
</template>

<script>
import orderbtn from './accountbtn.vue'
import ordersle from './accountsle.vue'
import ordertab from './accounttab.vue'
import {mapState, mapActions} from 'vuex'
export default {
  mounted () {
  },
  computed: mapState({
    tolos: ({account}) => account.total
  }),
  methods: {
    ...mapActions(['setConditions', 'accountSearch']),
    handleSizeChange (val) {
      this.setConditions({pageSize: val})
      this.accountSearch()
    },
    handleCurrentChange (val) {
      this.setConditions({pageNum: val})
      this.accountSearch()
    }
  },
  data () {
    return {
      currentPage4: 4,
      pageSize: 10, // 一页显示的条数
      pageIndex: 1
    }
  },
  components: {
    orderbtn,
    ordersle,
    ordertab
  }
}
</script>
<style lang="" scoped>
.order{
    box-sizing: border-box;
    padding: 24px;
    margin: 65px 0 0 240px;
}
.pagess{
  text-align:center;
}
</style>