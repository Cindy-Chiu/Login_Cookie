// 引用 Express 與 Express 路由器
const express = require('express')
const validation = require('../../models/validation')
const router = express.Router()


// 定義首頁(登入頁)路由
router.get('/', (req, res) => {
  res.render('index')
})


//定義輸入帳密後的路由
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  let [result, firstName] = validation(email,password)
  if (result){
    res.render('show', {firstName })
  } else{
    res.render('index', { firstName })
  }
})


// 匯出路由模組
module.exports = router