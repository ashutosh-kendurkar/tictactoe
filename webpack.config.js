const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.scss$/i,
				use: [
					"style-loader",
					"css-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}
