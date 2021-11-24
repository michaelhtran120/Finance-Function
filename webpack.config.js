const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/scripts/index.js",
        about: "./src/scripts/about.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist/scripts"),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    }
};
