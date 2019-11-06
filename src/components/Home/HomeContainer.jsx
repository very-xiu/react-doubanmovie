import React from "react"

import { Progress } from 'antd';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return <div style={{padding:30}}>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70}  status="exception"/>
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} status="active" />
        </div>
    }
}