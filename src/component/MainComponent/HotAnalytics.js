import React, { Component } from 'react'

import ModalExample from './ModalBody'

import { Table } from 'reactstrap';

import icon from '../../Asset/Icon/icon.svg'


export default class HotAnalytics extends Component {
    constructor(){
        super();
        this.state={
             data : [
                {
                    SlNo: "01",
                    sideId:"12345",
                    website:"name.com",
                    action:false
                },
                {
                    SlNo: "02",
                    sideId:"123456",
                    website:"name2.com",
                    action:false
                },
                {
                    SlNo: "03",
                    sideId:"123457",
                    website:"name3.com",
                    action:false
                },
                {
                    SlNo: "04",
                    sideId:"123458",
                    website:"name4.com",
                    action:false
                },
        
      ]
        }
    }
   

    render() {
        return (
            <div className="padding10">
                <h3 className="hotheading">
                    <span className="reduceSize">Hot Analytics</span>
                    <span className="right" ><ModalExample/></span>
                </h3><br></br>
                <Table hover responsive className="margin10">
                    <thead>
                        <tr className="colorPurple">
                            <th>SL.No.</th>
                            <th>Site Id</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                    this.state.data.map((item)=>
                    <tbody>
                        <th scope="row"> {item.SlNo}</th>
                    <th >{item.sideId}</th>
                    <th >{item.website}</th>
                    <th ><img className="shadow" src={icon} alt="Logo" /></th>
                        
                    </tbody>)
                }
     
            </Table>
        </div>
        )
    }
}
