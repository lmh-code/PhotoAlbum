let express = require('express')
let path = require('path')
let ejs = require('ejs')
let cookieParser = require('cookie-parser')
let logger = require('morgan')

let viewRouter = require('./controller/viewRouter')


let app = express()
/**
 * @description: 跨域设置
 */
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Headers', "Content-Type, Content-Length, Authorization, Accept, X-Requested-With, device, device_type, version")
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,DELETE,GET,PUT,POST")
  res.header("Access-Control-Max-Age", 10000)
  res.header("Access-Control-Allow-Credentials", true)
  res.header("AllowCredentials", false)
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

/**
 * @description: view engine setup
 */
app.set('views', path.join(__dirname, 'views'))
app.engine('html', ejs.__express)
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
// 创建静态文件  存放需要的css js 和 imgs
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', viewRouter)

module.exports = app