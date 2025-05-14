// JavaScript source code
const {calcFibonacci} = require('../services/fibonacciCalc');//calcFibonacci関数読み込み

exports.GetFibonaci_Kueri = (req, res, next) => {
	try {
		const n = parseInt(req.query.n, 10);//params文字列を整数に変換
								//↑これはユーザーが送ったデータをサーバに渡しすもの．データにアクセスできる queryは/fib?n=10に対応
		if (!Number.isInteger(n) || n < 0) {//エラーの判別（文字じゃない,0未満，上限いる？わからぬ）
			return res.status(400).json({status: 400,message:'Bad request'});//エラー内容表示
		}
		const result = calcFibonacci(n); //正常な値が入力されたら，関数呼び出し解を得る
		res.json({result.toString()});//JSONに返す.書き込む（？）処理
	}
	catch(err){//catchは処理を止めずに最後に処理してくれる
		next(err);//エラーポイントに渡す
	}
};
