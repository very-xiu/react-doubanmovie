import React from "react"

import { Rate } from 'antd';

export default class AboutContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <Rate style={{fontSize:28,padding:30}} />
    }
}