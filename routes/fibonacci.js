// JavaScript source code
const express = require('express');// �T�[�o�[�ǂݍ���
const router = express.Router();//�������ɂ���

const {GetFibonaci} =require('../controllers/fibonacci_create');//�֐����炤

router.get('/:n',GetFibonaci);//:n��n���֐��ɓn��

module.exports = router;//�O���Ŏg�����߃R�s�[