const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[ //插件
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ],
    module:{
        rules:[ //所有第三方模块的匹配规则
            {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
            {test:/\.css$/, use:['style-loader','css-loader']},
            {test:/\.(png|gif|jpg|bmp)$/, use:'url-loader?limit=5000'},
            {test:/\.js$/, use:'babel-loader', exclude:/node_modules/}
        ]
    }
}