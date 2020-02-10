import React, { Component } from 'react'


import HotAnalytics from './HotAnalytics'
import Website from './Website'


export default class MainHotAnalytics extends Component {
    render() {
        return (
            <div>
                <HotAnalytics/>
                <Website/>
            </div>
        )
    }
}
