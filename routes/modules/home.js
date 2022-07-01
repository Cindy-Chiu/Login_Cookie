// 引用 Express 與 Express 路由器
const express = require('express')
const cookieParser = require('cookie-parser')
const validation = require('../../models/validation')
const router = express.Router()
router.use('/', cookieParser('123456789'));



// 定義首頁(登入頁)路由
router.get('/', (req, res) => {
  res.render('index')
  
})


//定義輸入帳密後的路由
router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  let [result, firstName] = validation(email,password)
  if (result){ //若帳密皆正確，記錄cookie
    res.cookie('email', email, { path: '/cookie', signed: true, maxAge: 60000 });
    res.cookie('firstName', firstName, { path: '/cookie', signed: true, maxAge: 60000 });
    return res.redirect('/cookie');
  } else{
    res.render('index', { firstName })
  }
})



router.get('/cookie', function (req, res) {
  console.log(req.signedCookies)
  const firstName = req.signedCookies.firstName
  res.render('show', { firstName });
});


// 登出要清除cookie並回到登入頁
router.get('/logout', function (req, res) {
  res.clearCookie('email', { path: '/cookie' });
  res.clearCookie('firstName', { path: '/cookie' });
  return res.redirect('/');
});


// 匯出路由模組
module.exports = router