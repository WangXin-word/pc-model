


const path = require("path");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const CSS2LESSPlugin = require('./build/css2less')
const GroupSpritesmithPlugin = require('./build/groupSpritesmithPlugin')
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
    publicPath: './',
    outputDir: "cdd_h5",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    chainWebpack: config => {
      config.resolve.alias
            .set("@$", resolve("src"))
            .set("common", resolve("src/common"))
    },
    configureWebpack: config => {
      let plugins = [
            new CompressionWebpackPlugin({
                  filename: '[path].gz[query]',
                  algorithm: 'gzip',
                  test: new RegExp(
                        '\\.(' + ['js', 'css'].join('|') +
                        ')$',
                  ),
                  threshold: 10240,
                  minRatio: 0.8,
                  deleteOriginalAssets: false
            }),

      ]
      if (process.env.NODE_ENV !== 'development') {
            config.plugins = [...config.plugins, ...plugins]
      }
      
      if (process.env.VUE_APP_SPRITE) {
            config.plugins = [...config.plugins, new GroupSpritesmithPlugin(), new CSS2LESSPlugin()]
      }

},
    css: {
        loaderOptions: {
          less:{
            globalVars: {
              primary: '#fff'
            }
          }
        }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
      },
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 80,
        /* 使用代理 */
        proxy: {
          '/cddSrv': {
            /* 目标代理服务器地址 */
            target: 'https://www.phoneboss.cn:8080/',
            /* 允许跨域 */
            changeOrigin: true,
          },
        },
    },
    pluginOptions: {
      'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/common/less/index.less")] // 引入全局样式变量
      }
}
}