const getOrderList = (data) => {
  // 先返回假数据
  return {
    total: 2,
    list: [
      {
        id: 1,
        flag: 0,
        orderNo: '74123123352134',
        isConfirm: 1,
        productId: '456789654456',
        productName: '乐天游乐园门票（乐天世界）',
        priceType: '默认套餐',
        productType: '儿童票',
        startDate: '2020-2-19',
        endDate: '2020-2-23',
        wanId: 'tb658445',
        buyerName: '廖欣欣',
        buyerMobile: '13692293938',
        buyerEmail: '193@tontisa.com',
        number: 5,
        totalPrice: 480,
        orderStatus: 0,
        refundStatus: 0,
        refundNo: '57687650032697191',
        remark: '这里是设置旗子时填写的交易备注',
        createTime: '2020-2-19 17:53:47',
        updateTime: '2020-2-19 17:53:47',
        storeName: '百欣国际专营店',
        orderNum: 7
      },
      {
        id: 2,
        flag: 1,
        orderNo: '74123123352134',
        isConfirm: 0,
        productId: '456789654456',
        productName: '乐天游乐园门票（乐天世界）',
        priceType: '默认套餐',
        productType: '儿童票',
        startDate: '2020-2-19',
        endDate: '2020-2-23',
        wanId: 'tb658445',
        buyerName: '廖欣欣',
        buyerMobile: '13692293938',
        buyerEmail: '193@tontisa.com',
        number: 5,
        totalPrice: 480,
        orderStatus: 0,
        refundStatus: 0,
        refundNo: '57687650032697191',
        remark: '这里是设置旗子时填写的交易备注',
        createTime: '2020-2-19 17:53:47',
        updateTime: '2020-2-19 17:53:47',
        storeName: '百欣国际专营店',
        orderNum: 7
      }
    ]
  }
}
const getOrderDetail = (id) => {
  return {
    id: 2,
    title: '标题B',
    content: '内容B',
    creatime: 11546640524371,
    author: 'cai'
  }
}
module.exports = {
  getOrderList,
  getOrderDetail
}
