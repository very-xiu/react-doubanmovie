import React from 'react'

// import inlineStyle from './cmtItemStyles.js'

// 【这种直接 import '../路径标识符' 的 CSS 导入形式，并不是模块化的CSS】
// import '../../css/commentitem.css'

// 默认情况下，如果没有为 CSS 启用模块化，则接收到的 itemStyles 是个空对象，因为 .css 样式表中，不能直接通过 JS 的 export defualt 导出对象
// 当启用 CSS 模块化之后，导入 样式表得到的 itemStyles 就变成了一个 样式对象，其中，属性名是 在样式表中定义的类名，属性值，是自动生成的一个复杂的类名（防止类名冲突）
import itemStyles from '../../css/commentitem.css'
// console.log(itemStyles);

// 封装一个评论项组件，此组件由于不需要自己的私有数据，所以直接定义为无状态组件

// #region 样式优化1
/* const boxStyle={border:'3px solid #ccc',margin:'10px 0',paddingLeft:15}
const titleStyle={fontSize:16,color:'purple'}
const bodyStyle={fontSize:14,color:'red'} */
// #endregion

// #region 样式优化2 把 样式对象，封装到唯一的一个对象中
/* const inlineStyle={
    boxStyle:{border:'3px solid #ccc',margin:'10px 0',paddingLeft:15},
    titleStyle:{fontSize:16,color:'purple'},
    bodyStyle:{fontSize:14,color:'red'}
} */
// #endregion

// 注意： 当你怀念 vue 中 scoped 指令的时候，要时刻知道 ， react 中并没有指令的概念
export default function CommentItem(props){
    return <div className={itemStyles.box}>
    <h1 className={itemStyles.titleOne}>用户名：{props.user}</h1>
    <h2 className={itemStyles.titleTwo}>评论内容：{props.content}</h2>
</div>
}