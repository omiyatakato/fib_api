// JavaScript source code
const express = require('express');// �T�[�o�[�ǂݍ���
const router = express.Router();//�������ɂ���

const {GetFibonaci_Pasupara} =require('../controllers/fibonacci_create');//�֐����炤//�p�X�p�����[�^�[
const {GetFibonaci_Kueri} =require('../controllers/fibonacci_create');//�֐����炤//�p�X�p�����[�^�[

router.get('/',GetFibonaci_Kueri);//�N�G����

router.get('/:n',GetFibonaci_Pasupara);//:n��n���֐��ɓn���@//�p�X�p�����[�^�[��

module.exports = router;//�O���Ŏg�����߃R�s�[