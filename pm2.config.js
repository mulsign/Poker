module.exports = {
    apps: [{
        // 生产环境
        name: "Poker",
        // 项目启动入口文件
        script: "./app.js",
        // 项目环境变量
        env: {
            "PORT": 5888
        }
    }]
}
