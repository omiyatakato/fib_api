// JavaScript source code
const calcFibonacci = (n) =>{
	if (n <= 1) return BigInt(n);//BigIntは大きな整数専用！C++のlonlongと同じ用途！

	let a = BigInt(0), b = BigInt(1);//BigIntは大きな整数専用！C++のlonlongと同じ用途！
	for(let i=2; i<=n;i++){
		const value=a+b;//2個前の数同士を足す
		a=b; //前の数代入
		b=value;//次の値代入
	}
	return b;
}
module.exports={calcFibonacci};
