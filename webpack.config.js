const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") //Importando o plugin

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true, //Sempre que executar o devServer abrir aplicação
        liveReload: true, //Sempre que modificar ele carregar aplicação
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            favicon: path.resolve("src", "assets", "scissors.svg"),
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use:["style-loader", "css-loader"], //Quando for arquivo css vai carregar e injetar o css na aplicação
            },
        ],
    },
}