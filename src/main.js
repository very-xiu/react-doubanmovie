// JS打包入口文件
import React from 'react';
import ReactDOM from 'react-dom'

//使用class创建的类，通过extends关键字继承了React.Component之后，这个类就是一个组件的模板
class Hello extends React.Component{
    render(){
        return <div>
            <h1>这是使用class类创建的组件</h1>
        </div>;
    }
}

ReactDOM.render(<div>
    <Hello></Hello>
</div>,document.getElementById('app'));