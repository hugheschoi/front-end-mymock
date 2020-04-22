const querystring = require('querystring')
const handleFliggyRouter = require('./src/router/fliggy')
let whileList=['http://localhost:8081']
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    // 先判断是否符合post
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(
        JSON.parse(postData)
      )
    })
  })
  return promise
}
const serverHandle = (req, res) => {
  // 处理跨域
  let origin = req.headers.origin
  if (whileList.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'name');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type');
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Max-Age', 6000);
    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')
    if (req.method === 'OPTIONS') {
      res.end();
    }
  }

  // 获取get数据 query
  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[0])
  // 获取post数据 body，由于body比较大，需要异步地去获取
  getPostData(req).then(postData => {
    console.log(postData)
    req.body = postData
    // 处理返回数据
    const fliggyData = handleFliggyRouter(req, res)
    if (fliggyData) {
      res.writeHead(200)
      res.end(
        JSON.stringify(fliggyData)
      )
    }
  }).catch(err => {
    res.writeHead(404, {'Content-type': 'text/plain'})
    res.write('404 Not Found\n')
    res.end()
    console.log(err)
  })
}

module.exports = serverHandle
