// JS打包入口文件
import React from 'react';
import ReactDOM from 'react-dom'

import Hello from './components/Hello.jsx'
import Hello2 from './components/Hello2.jsx'

ReactDOM.render(<div>
    <Hello age={20}></Hello>
    <Hello2 address="北京传智播客" info="黑马程序员"></Hello2>
</div>,document.getElementById('app'));