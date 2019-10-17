// JS打包入口文件
import React from 'react';
import ReactDOM from 'react-dom'

// 导入评论列表样式【注意：这种样式是全局的】,这个了解了解就好了，不必深究
// import './css/CommentList.css'

import CommentList from './components/comments/CommentList.jsx'

ReactDOM.render(<div>
    <CommentList></CommentList>
</div>,document.getElementById('app'));