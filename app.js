// JavaScript source code
const express = require('express'); //Node.jsのexpress（フレームワーク？）を読み込む
const app = express();//app作る
const fibonaciRouter = require('./routes/fibonacci'); //fibonacciどのURLに来たらどの処理をするか
const errorHandler = require('./middlewares/errorHandler');//fibonacci に来たリクエストを専用のファイルに送って処理

app.use(express.json());//JSONデータを読み込む
app.use('/fib',fibonaciRouter);//fibonaccRouter に渡すように設定する

app.use(errorHandler);//エラーが出た時の返しが書かれてる．最後に処理？するといい

const PORT = process.env.PORT || 3000; //サーバー起動
app.listen(PORT,()=>{
	console.log(`Server running on http://localhost:${PORT}`);
});