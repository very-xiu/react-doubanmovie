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
            // 这个是css-loader>3.0版本插件的写法
            // {test:/\.css$/, use:['style-loader','css-loader?modules&localIdentName:{[name]_[local]-[hash:5]}']}, // 通过 为 css-loader 添加 modules 参数，启用 CSS 的模块化
            {test:/\.css$/, use:[
                'style-loader',
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: "[name]_[local]-[hash:5]"
                        }
                    }														
                }
            ]},
            {test:/\.(png|gif|jpg|bmp)$/, use:'url-loader?limit=5000'},
            {test:/\.jsx?$/, use:'babel-loader', exclude:/node_modules/}
        ]
    }
}