//variable
const path = require('path')

// module
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js'
    },

    //mode: 'development'
    devServer: {
        //contentBase: 'dist'
        static: {
            directory: path.join(__dirname,'./dist')
        }
    }
}