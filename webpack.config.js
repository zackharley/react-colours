const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/Colours.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-colours.min.js',
		library: 'Colours',
		libraryTarget: 'umd'
	},
	externals: {
		root: 'React',
		commonjs2: 'react',
		commonjs: 'react',
		amd: 'react'
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
