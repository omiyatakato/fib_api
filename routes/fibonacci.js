// JavaScript source code
const express = require('express');// �T�[�o�[�ǂݍ���
const router = express.Router();//�������ɂ���

const {GetFibonaci_Kueri}= require('../controllers/fibonacci_create');

router.get('/', GetFibonaci_Kueri);//�N�G����
console.log('GetFibonaci_Kueri:', typeof GetFibonaci_Kueri);
module.exports = router;//�O���Ŏg�����߃R�s�[