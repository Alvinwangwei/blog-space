module.exports = {
  publicPath: '/', //部署应用包时的基本 URL
  outputDir: 'dist', //生产环境构建文件的目录
  assetsDir: 'assets', //放置生成的静态资源
  indexPath: 'index.html', //指定生成的 index.html 的输出路径
  filenameHashing: true, //生成的静态资源hash
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template:  'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Home Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    }
  },
  // 保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 通过 Babel 显式转译一个依赖
  transpileDependencies: [],
  // 生产环境的 source map
  productionSourceMap: true,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  crossorigin: undefined,
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity
  integrity: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  configureWebpack: {},

  css: {
    // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块
    requireModuleExtension: true,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中
    extract: process.env.NODE_ENV === 'production',
    // 是否为 CSS 开启 source map
    sourceMap: false,
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {},
  },
  devServer: {
    host: 'wangwei.com',
    port: '8080',
    // 指向开发环境 API 服务器
    proxy: {
      '/api': {
        target: 'http://wangwei.com:7001',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  parallel: require('os').cpus().length > 1,
  pluginOptions: {},
}
