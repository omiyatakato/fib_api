// JavaScript source code
const express = require('express');// サーバー読み込み
const router = express.Router();//小分けにする

const {GetFibonaci_Pasupara} =require('../controllers/fibonacci_create');//関数もらう//パスパラメーター
const {GetFibonaci_Kueri} =require('../controllers/fibonacci_create');//関数もらう//パスパラメーター

router.get('/',GetFibonaci_Kueri);//クエリ式

router.get('/:n',GetFibonaci_Pasupara);//:nのnを関数に渡す　//パスパラメーター式

module.exports = router;//外部で使うためコピー