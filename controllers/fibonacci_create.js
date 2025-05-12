// JavaScript source code
const {calcFibonacci} = require('../services/fibonacciCalc');//calcFibonacci�֐��ǂݍ���

exports.GetFibonaci = (req,res,next)=>{//API�̖{�̏������s�����I
	try{
		const n = parseInt(req.params.n,10);//params�E�E�E������𐮐��ɕϊ�
							  //������̓��[�U�[���������f�[�^���T�[�o�ɓn�������́D�f�[�^�ɃA�N�Z�X�ł���
		if(!Number.isInteger(n) || n<0){ //�G���[�̔��ʁi��������Ȃ�,0�����C�������H�킩��ʁj
			return res.status(400).json({error:'�����œ��͂��ꂽ�C���邢��0�ȉ�������'});//�G���[���e�\��
		}
		const return_value = calcFibonacci(n); //����Ȓl�����͂��ꂽ��C�֐��Ăяo�����𓾂�
		res.json({n,return_value});//JSON�ɕԂ�.�������ށi�H�j����
		}
	catch(err){//catch�͏������~�߂��ɍŌ�ɏ������Ă����
		next(err);//�G���[�|�C���g�ɓn��
	}
};