import React from 'react'
import CommentItem from './CommentItem.jsx'

export default class CommentList extends React.Component{
    constructor(props){
        super(props);

        // 定义当前评论列表组件的私有数据
        this.state = {
            cmts:[
                { user: '张三', content: '哈哈，沙发' },
                { user: '张三2', content: '哈哈，板凳' },
                { user: '张三3', content: '哈哈，凉席' },
                { user: '张三4', content: '哈哈，砖头' },
                { user: '张三5', content: '哈哈，楼下山炮' }
            ]
        }
    };
    // 在有状态组件中，render函数是必须的，表示渲染哪些虚拟DOM元素并展示出来
    render (){

        // 不推荐的方法
        /* var arr = [];
        this.state.cmts.forEach(item=>{
            arr.push(<h1>{item.user}</h1>)
        }) */

        return <div>
            <h1 className="titleOne">评论列表内容</h1>
            {/* 可以直接在JSX语法内部使用数组的map函数来遍历数组的每一项并使用map返回操作后的最新数组 */}
            {this.state.cmts.map((item,i)=>{
                // return <CommentItem user={item.user} content={item.content} key={i}></CommentItem>
                return <CommentItem key={i} {...item}></CommentItem>
            })}
        </div>
    };
}