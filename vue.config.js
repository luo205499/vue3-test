const path = require('path')
module.exports = {
    publicPath : './',

    //3.当运行vue-cli-service build时生成的生产环境构建环境的目录。用法和webpack的output.path一样，不要修改output.path
    outputDir :'dist',

    //4.放置打包后生成的静态资源（js、css、img、fonts）的目录，该目录相对于outputDir。
    assetsDir : 'static',

    //5.指定生成的index.html的输出路径，相对于outputDir。也可以是一个绝对路径。
    indexPath : 'index.html',
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8082,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
