import React from "react"

import { Button, Icon, Spin, Alert } from 'antd';

import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
            isloading: true //电影详细信息
        }
    }

    UNSAFE_componentWillMount() {
        fetchJSONP('https://douban.uieee.com/v2/movie/subject/' + this.props.match.params.id).then(res => res.json())
            .then(data => {
                this.setState({
                    info: data,
                    isloading: false
                })
            })
    }

    render() {
        return <div>
            <Button type="primary" onClick={this.goBack} style={{ left: -80 }}>
                <Icon type="left" />
                返回电影列表
          </Button>
            {this.renderInfo()}
        </div>
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影详细数据"
                    description="精彩内容，马上呈现..."
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{textAlign:'center'}}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.info.images.large.replace('img3', 'img1')} />
                </div>
                <p style={{textIndent:'2em',lineHeight:'30px'}}>{this.state.info.summary}</p>
            </div>
        }
    }

    goBack = () => {
        this.props.history.go(-1);
    }
}