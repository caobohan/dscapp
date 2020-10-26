module.exports = {
    publicPath: "./",
    devServer: {
        host: "0.0.0.0",
        port: "9500",
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000/api/",
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api": ""
                }
            },
            // "/api": {
            //     target: "https://x.dscmall.cn/api/catalog",
            //     changeOrigin: true, //开启代理，允许跨域访问
            //     pathRewrite: {
            //         "^/api2": ""
            //     }
            // }
        }
    },
}