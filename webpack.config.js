module.exports = {
    entry: {
        index: __dirname + "/src/EbmlToJson.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            }
        ]
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    performance: {
        maxEntrypointSize: 2 * 1024 * 1024,
        maxAssetSize: 2 * 1024 * 1024
    }
};
