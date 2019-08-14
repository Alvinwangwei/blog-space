// vue.config.js
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/assets/css/variable.scss";
                    @import "@/assets/css/mixin.scss";
                    @import "@/assets/css/common.scss";
                `
            }
        }
    },
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('router',resolve('src/router'))
            .set('utils',resolve('src/utils'))
            .set('static',resolve('src/static'))
            .set('store',resolve('src/store'))
            .set('views',resolve('src/views'))
        config.optimization.minimize(true)
        config.optimization.splitChunks({
            chunks: 'all'
          })
        // 用cdn方式引入
        config.externals({
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'axios': 'axios'
        })
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080 ',
                changeOrigin: true
            }
        }
    },
    assetsDir: 'assets',
    publicPath: './',
    lintOnSave: false
}