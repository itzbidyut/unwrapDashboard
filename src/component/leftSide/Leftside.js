import React, { Component } from 'react'


import './leftSide.css'

export default class Leftside extends Component {
    render() {
        return (
            <div className="leftside">
                <ul>
                    <li> Dashboard </li>
                    <li> Campaigns </li>
                    <li> Hot Links </li>
                    <li> Hot Analytics </li>
                    <li> Settings </li>
                </ul>
            </div>
        )
    }
}
