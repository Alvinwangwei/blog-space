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
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
		config.optimization.minimize(true)
		config.optimization.splitChunks({
			chunks: 'all'
		})
	},
	devServer: {
    port: 2030
	},
	assetsDir: 'assets',
	publicPath: './',
	lintOnSave: false
}