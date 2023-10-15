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
};
