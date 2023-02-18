import path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { EsbuildPlugin } from 'esbuild-loader';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';



const config: webpack.Configuration = {
	context: __dirname,
	entry: './src/index.tsx',
	devtool: false,
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Solid APP!',
			template: './public/index.html'
		}),
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true,
				},
				mode: 'write-references',
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015'
				}
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				type: 'asset/resource',
			},
		],
	},
	optimization: {
		minimizer: [
			new EsbuildPlugin({
				css: true,
				minify: true,
			})
		]
	}
}

export default config