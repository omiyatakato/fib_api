// JavaScript source code
const {calcFibonacci} = require('../services/fibonacciCalc');//calcFibonacci関数読み込み

exports.GetFibonaci = (req,res,next)=>{//APIの本体処理を行うぜ！
	try{
		const n = parseInt(req.params.n,10);//params・・・文字列を整数に変換
							  //↑これはユーザーが送ったデータをサーバに渡しすもの．データにアクセスできる
		if(!Number.isInteger(n) || n<0){ //エラーの判別（文字じゃない,0未満，上限いる？わからぬ）
			return res.status(400).json({error:'文字で入力された，あるいは0以下だった'});//エラー内容表示
		}
		const return_value = calcFibonacci(n); //正常な値が入力されたら，関数呼び出し解を得る
		res.json({n,return_value});//JSONに返す.書き込む（？）処理
		}
	catch(err){//catchは処理を止めずに最後に処理してくれる
		next(err);//エラーポイントに渡す
	}
};