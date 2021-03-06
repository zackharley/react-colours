const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.min.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$|\.jsx/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						'es2015',
						'react',
					],
				},
			},
		],
	},
};
