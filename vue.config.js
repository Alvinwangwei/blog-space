// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
	css: {
		loaderOptions: {
		}
	},
	chainWebpack: (config)=>{
		config.optimization.minimize(true)
		config.optimization.splitChunks({
			chunks: 'all'
		})
	},
	devServer: {
	},
	assetsDir: 'assets',
	publicPath: './',
	lintOnSave: false
}