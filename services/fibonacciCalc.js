// JavaScript source code
const calcFibonacci = (n) =>{
	if(n<=1) return n;//‚P”Ô–ÚˆÈ‰º‚Ì€‚È‚çn‚ð•Ô‚·‚¾‚¯‚ÅOK

	let a=0,b=1;
	for(let i=2; i<=n;i++){
		const value=a+b;//2ŒÂ‘O‚Ì”“¯Žm‚ð‘«‚·
		a=b; //‘O‚Ì”‘ã“ü
		b=value;//ŽŸ‚Ì’l‘ã“ü
	}
	return b;
}
module.exports={calcFibonacci};