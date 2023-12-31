const {resolve} = require("path")

module.exports = {
	mode: "development",
	entry:{
		client: "./client/index.jsx"
	},
	output: {
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx'],
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	}
}
