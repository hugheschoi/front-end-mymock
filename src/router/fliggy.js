const { SuccessModel, ErrorModel } = require('../model/resModel.js')
const { getOrderList, getOrderDetail } = require('../controller/fliggy')
const handleFliggyRouter = (req, res) => {
  const method = req.method
  if (method === 'POST' && req.path === '/fliggy/order/list') {
    const body = req.body || {}
    const data = getOrderList(body)
    return new SuccessModel(data)
  }
}

module.exports = handleFliggyRouter