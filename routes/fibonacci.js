// JavaScript source code
const express = require('express');// サーバー読み込み
const router = express.Router();//小分けにする

const {GetFibonaci} =require('../controllers/fibonacci_create');//関数もらう

router.get('/:n',GetFibonaci);//:nのnを関数に渡す

module.exports = router;//外部で使うためコピー