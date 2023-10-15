// node 모듈 시스템
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/app.js",
    },
    output: {
        path: path.resolve("./dist"),
        // entry key가 name으로 치환됨
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                // 모든 js 확장자를 가지고 있는 파일을 읽는다.
                test: /\.js$/,
                use: [path.resolve("./my-webpack-loader.js")],
            },
        ],
    },
};
