// 项目根组件
import React from "react"

// 导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom'
// 导入路由相关的组件页面
import HomeContainer from './components/Home/HomeContainer.jsx'
import MovieContainer from './components/Movie/MovieContainer.jsx'
import AboutContainer from './components/About/AboutContainer.jsx'

// 导入需要的Ant Design组件
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

// 导入模块化的样式
import styles from './css/app.scss'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    UNSAFE_componentWillMount(){
        // console.log(window.location.hash.split('/'));
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>

                {/* Header头部区域 */}
                <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home"><Link to='/home'>首页</Link></Menu.Item>
                        <Menu.Item key="movie"><Link to='/movie/in_theaters/1'>电影</Link></Menu.Item>
                        <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
                    </Menu>
                </Header>
                
                {/* Content中间内容区域 */}
                <Content style={{backgroundColor:'#fff',flex:1}}>
                    <Route path="/home" component={HomeContainer}></Route>
                    <Route path="/movie" component={MovieContainer}></Route>
                    <Route path="/about" component={AboutContainer}></Route>
                </Content>

                {/* Footer底部区域 */}
                <Footer style={{ textAlign: 'center' }}>前端项目 ©2019 Created by Ant UED</Footer>
            </Layout>
        </HashRouter>
    }
}