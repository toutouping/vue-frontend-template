'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: { // 开发环境下面的配置
        assetsSubDirectory: 'static', // 子目录，一般存放css,js,image等文件
        assetsPublicPath:'/', // 根目录
        proxyTable: {// 设置代理
          '/frontApi': {
            target: 'http://localhost:8082', // 你接口的域名
            changeOrigin: true,    // 如果接口跨域，需要进行这个参数配置
            pathRewrite: {
                '^/frontApi': ''
            }
          }
        },
        // Various Dev Server settings
        host: '127.0.0.1', // 地址
        port: 8088, // 端口号设置，端口号占用出现问题可在此处修改
        autoOpenBrowser: true, // 是否在编译（输入命令行npm run dev）后打开
        errorOverlay: true, // 浏览器错误提示
        notifyOnErrors: true, // 跨平台错误提示
        poll: false, // 使用文件系统(file system)获取文件改动的通知devServer.watchOptions

        useEslint: true, // 是否使用Eslint校验
        showEslintErrorsInOverlay: true, // eslint浏览器错误提示遮罩层

        devtool: 'cheap-module-eval-source-map', // Source Maps 增加调试，该属性为原始源代码（仅限行）不可在生产环境中使用

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true, // 使缓存失效
        // 代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录
        // 当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
        cssSourceMap: true
    },

    build: { // 生产环境下面的配置
        // index: path.resolve(__dirname, '../../templates/index.html'),
        index: path.resolve(__dirname, '../dist/index.html'), // index编译后生成的位置和名字，根据需要改变后缀，比如index.php
        // assetsRoot: path.resolve(__dirname, '../../static'),
        assetsRoot: path.resolve(__dirname, '../dist'), // 编译后存放生成环境代码的位置
        // assetsPublicPath: '../static/',
        assetsSubDirectory: '', // js,css,images存放文件夹名
        
        assetsPublicPath: './', // 发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径

        productionSourceMap: true, // Source Maps
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map', // unit的gzip命令用来压缩文件，gzip模式下需要压缩的文件的扩展名有js和css

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
