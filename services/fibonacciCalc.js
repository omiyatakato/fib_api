// JavaScript source code
const calcFibonacci = (n) =>{
	if(n<=1) return n;//�P�Ԗڈȉ��̍��Ȃ�n��Ԃ�������OK

	let a=0,b=1;
	for(let i=2; i<=n;i++){
		const value=a+b;//2�O�̐����m�𑫂�
		a=b; //�O�̐����
		b=value;//���̒l���
	}
	return b;
}
module.exports={calcFibonacci};