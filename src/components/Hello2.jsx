import React from 'react';

//使用class创建的类，通过extends关键字继承了React.Component之后，这个类就是一个组件的模板
//如果想要引用这个组件，可以把类的名称以标签形式导入到JSX(ReactDOM.render())中使用
export default class Hello2 extends React.Component{
    constructor(props){
        //注意：如果使用extends实现了继承，那么在constructor的第一行，一定要显示调用一下super()
        // super()表示父类的构造函数
        super(props);
        // 在constructor中，如果想要访问props属性，不能直接使用this.props，而是需要在constructor的构造器参数列表中，显示定义props参数来接收，才能正常使用
        // console.log(props);
        // 注意： 这是固定写法，this.state 表示 当前组件实例的私有数据对象，就好比 vue 中，组件实例身上的 data(){ return {} } 函数
    // 如果想要使用 组件中 state 上的数据，直接通过 this.state.*** 来访问即可
    this.state = {
        msg: '这是 Hello2 组件的私有msg数据',
        info: '瓦塔西***'
      }
    }
    render(){
        return <div>
            <h1>这是使用class类创建的组件</h1>
            <h3>外界传来的数据：{this.props.address}------{this.props.info}</h3>
            <h5>{this.state.msg}</h5>

            {/* 1.1 在React中，如果想要为元素绑定事件，不能使用 网页中 传统的 onclick 事件，而是需要 使用 React 提供的  onClick */}
            {/* 1.2 也就是说：React中，提供的事件绑定机制，使用的 都是驼峰命名，同时，基本上，传统的 JS 事件，      都被 React 重新定义了一下，改成了 驼峰命名 onMouseMove  */}
            {/* 2.1 在 React 提供的事件绑定机制中，事件的处理函数，必须直接给定一个 function，而不是给定一个    function 的名称 */}
            {/* 2.2 在为 React 事件绑定 处理函数的时候，需要通过 this.函数名， 来把 函数的引用交给 事件 */}
            <input type="button" value="修改msg" id="btnChangeMsg" onClick={this.changeMsg}/>
            <br/>
        </div>;
    }

    changeMsg = ()=>{
        // console.log('ok')
        // 注意： 这里不是传统网页，所以 React 已经帮我们规定死了，在 方法中，默认this 指向 undefined，并不 是指向方法的调用者
        // console.log(this)

        // 如果要为 this.state 上的数据重新赋值，那么，React 推荐使用 this.setState({配置对象}) 来重新为 state 赋值
        // 注意： this.setState 方法，只会重新覆盖那些 显示定义的属性值，如果没有提供最全的属性，则没有提供    的属性值，不会被覆盖；

        // this.setState 方法，也支持传递一个 function，如果传递的是 function，则在 function 内部，必须return 一个 对象；
        // 在 function 的参数中，支持传递两个参数，其中，第一个参数是 prevState，表示为修改之前的 老的 state 数据
        // 第二个参数，是 外界传递给当前组件的 props 数据
        this.setState(function(prevState,props){
            // console.log(props);
            return {
                msg:'修改了msg中的数据'
            }
        },function(){
            // 由于 this.setState 是异步执行的，所以，如果想要立即拿到最新的修改结果，最保险的方式， 在回调函数中去操作最新的数据
            // console.log(this.state.msg);
        })
        // 经过测试发现， this.setState 在调用的时候，内部是异步执行的，所以，当立即调用完 this.setState 后，输出 state 值可能是旧的
        console.log(this.state.msg);
    }
}