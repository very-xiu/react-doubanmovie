// JS打包入口文件
import React from 'react';
import ReactDOM from 'react-dom'

// 导入项目根组件
import App from './App.jsx'

ReactDOM.render(<App>

</App>,document.getElementById('app'));

module.hot.accept();