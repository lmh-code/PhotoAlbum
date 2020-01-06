let debug = require('debug')('photoalbum:server')
let app = require("../app")
let config = require("../config")
let http = require("http")


// 设置端口号
let port = normalizePort(process.env.PORT || config.port)
app.set("port", config.port)

// 创建server
let server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * @description: 格式化端口号
 * @param {type} 
 * @return: 
 */
function normalizePort(val) {
  let port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}

/**
 * @description: 错误监听
 * @param {type} 
 * @return: 
 */
function onError() {
  console.error('requires elevated privileges')
}

/**
 * @description: server listing
 * @param {type} 
 * @return: 
 */
function onListening() {
  console.log('正在运行：http://localhost:' + config.port)
  let addr = server.address()
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  debug('Listening on ' + bind)
}