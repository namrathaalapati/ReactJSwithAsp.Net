const path = require("path");

module.exports = {
    entry: {
        index: "./Scripts/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}