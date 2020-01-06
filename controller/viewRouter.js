var express = require('express')
var router = express.Router()
// showIndex
router.get('/', function(req, res, next) {
  res.type('html')
  res.render("index", {
    name: '呼呼',
    age: 12
  })
})

module.exports = router