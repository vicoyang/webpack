const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
	port: "9090",
	hot: true
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
},
plugins: [
   new webpack.BannerPlugin('版权所有，爱干嘛干嘛'),
   new HtmlWebpackPlugin({
   	  template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
   }),
   new webpack.HotModuleReplacementPlugin()//热加载插件
]

}

//注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
