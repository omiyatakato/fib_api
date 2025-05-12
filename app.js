// JavaScript source code
const express = require('express'); //Node.js��express�i�t���[�����[�N�H�j��ǂݍ���
const app = express();//app���
const fibonaciRouter = require('./routes/fibonacci'); //fibonacci�ǂ�URL�ɗ�����ǂ̏��������邩
const errorHandler = require('./middlewares/errorHandler');//fibonacci �ɗ������N�G�X�g���p�̃t�@�C���ɑ����ď���

app.use(express.json());//JSON�f�[�^��ǂݍ���
app.use('/fib',fibonaciRouter);//fibonaccRouter �ɓn���悤�ɐݒ肷��

app.use(errorHandler);//�G���[���o�����̕Ԃ���������Ă�D�Ō�ɏ����H����Ƃ���

const PORT = process.env.PORT || 3000; //�T�[�o�[�N��
app.listen(PORT,()=>{
	console.log(`Server running on http://localhost:${PORT}`);
});