// JavaScript source code
const express = require('express');// サーバー読み込み
const router = express.Router();//小分けにする

const {GetFibonaci_Kueri}= require('../controllers/fibonacci_create');

router.get('/', GetFibonaci_Kueri);//クエリ式
console.log('GetFibonaci_Kueri:', typeof GetFibonaci_Kueri);
module.exports = router;//外部で使うためコピー