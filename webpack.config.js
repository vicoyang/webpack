module.exports = { 
entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件 
output: { path: __dirname + "/public",//打包后的文件存放的地方 
          filename: "bundle.js"//打包后输出文件的文件名 
        } ,
devtool: "eval-source-map",
devServer: {
	contentBase: "./public",//服务器所在文件夹
	historyApiFallback: true,//
	inline: true,
	port: "9090"
},
module: { 
	rules: [ 
	{ 
		test: /(\.jsx|\.js)$/, 
		use: { 
			loader: "babel-loader" 
		}, 
		exclude: /node_modules/ 
	} ,
	{
		test: /.css$/,
		use: [
           {
           	loader: "style-loader"
           },{
           	loader: "css-loader",
           	options: {
           		modules: true
           	}
           },
           {
           	 loader: "postcss-loader"
           }
		]
	}
	] 
}

}

//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
