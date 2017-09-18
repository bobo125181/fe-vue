export const Order = {
  number: ['序号', '100'],
  order: ['订单号', '140'],
  name: ['商品名称', '120'],
  sku: ['sku', '120'],
  goodsId: ['货号', '140'],
  amount: ['订单金额', '120'],
  status: ['订单状态', '140'],
  way: ['优惠方式', '140'],
  favour: ['优惠金额', '140'],
  payway: ['支付方式', '140'],
  createTime: ['创建时间', '140'],
  user: ['购买人', '140']
}
export const orderList = [{
  number: 1,
  order: '1',
  name: '测试',
  sku: '1',
  goodsId: 1,
  amount: '128.00',
  status: '交易成功',
  way: '免息券',
  favour: '10',
  payway: '信用支付',
  createTime: '2017-06-15 12:00:00',
  user: 'hj',
  salesReturn: '退货'
}]
export const account = {
  orderNo: ['订单号'],
  productName: ['商品名称'],
  articleNumber: ['货号'],
  supplier: ['供货商'],
  settleCash: ['结算金额'],
  salePrice: ['商品售价'],
  billCash: ['账单金额'],
  benefitWays: ['优惠方式', '优惠金额'],
  inCome: ['闪银收入'],
  isSettlement: ['结算状态'],
  payType: ['支付方式'],
  orderTime: ['下单时间'],
  kdCom: ['物流公司'],
  kdNum: ['物流单号'],
  sendGoodTime: ['发货时间'],
  isRefund: ['是否退货'],
  refundReason: ['退货原因'],
  refundTime: ['退货时间']
}
export const SettleStatus = {
  1: '全部',
  2: '已结算',
  3: '未结算'
}
export const orderHeader = {
  numbers: ['序号'],
  orderNo: ['订单号'],
  productName: ['商品名称'],
  skuCode: ['Sku'],
  outSkuId: ['货号'],
  orderCash: ['订单金额'],
  orderStatus: ['订单状态'],
  benefitWay: ['优惠方式'],
  benefitCash: ['优惠金额'],
  payWay: ['支付方式'],
  orderTime: ['创建时间'],
  buyer: ['购买人'],
  userId: ['用户id'],
  consignee: ['收货人'],
  address: ['收货地址'],
  contact: ['联系方式'],
  remark: ['备注'],
  manu: ['发货商家'],
  manuId: ['商家id'],
  deliveryTime: ['发货时间'],
  logistics: ['物流'],
  logisticsNo: ['物流单号'],
  // supplyRemark: ['商家备注'],
  refundsStatus: ['退货状态']

}

