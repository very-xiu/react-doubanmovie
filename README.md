# React-study

#### 介绍
#### react的学习知识点以及参数配置可以重复拿来使用。

#### 在安装babel的时候，遇到个Error: Cannot find module '@babel/core’问题，问题产生的原因：babel-loader和babel-core版本不对应所产生的。  
babel-loader 8.x对应babel-core 7.x  
babel-loader 7.x对应babel-core 6.x  

修改.babelrc文件  
{  
    "presets": ["@babel/preset-env", "@babel/preset-react", "mobx"],  
    "plugins": [  
        "@babel/plugin-proposal-object-rest-spread",  
        "@babel/plugin-transform-runtime"  
    ]  
}  
  
如果你按上述命令安装完后，相应的版本应该如下图所示，问题也应该解决了。  
"devDependencies": {  
    "@babel/core": "^7.2.2",  
    "@babel/plugin-proposal-object-rest-spread": "^7.2.0",  
    "@babel/plugin-transform-runtime": "^7.2.0",  
    "@babel/preset-env": "^7.2.3",  
    "@babel/preset-react": "^7.0.0",  
    "babel-loader": "^8.0.4",  
    "babel-preset-mobx": "^2.0.0",  
    "css-loader": "^2.1.0",  
    "file-loader": "^3.0.1",  
    "popper.js": "^1.14.6",  
    "style-loader": "^0.23.1",  
    "url-loader": "^1.1.2",  
    "webpack": "^4.28.2",  
    "webpack-cli": "^3.1.2"  
  },  
  "dependencies": {  
    "@babel/runtime": "^7.2.0",  
    "bootstrap": "^4.2.1",  
    "jquery": "^3.3.1"  
  }  
