//variable
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// module
module.exports = {
    //entry: ['babel-polyfill', "./src/js/index.js"],
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js'
    }, //end output

    //mode: 'development'
    //Server-pack
    devServer: {
        //contentBase: 'dist'
        static: {
            directory: path.join(__dirname, './dist'),
        }
        , port: 7777
    }, // end devServer


    //automatics Html templates
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"

        }) //end HtmlWebpackPlugin
    ], //end plugins

    //Babel
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } //end user
            } //end rules
        ] //end rules
    } //end module




} // end module.exports