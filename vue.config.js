const path = require('path')
module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8081,
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
