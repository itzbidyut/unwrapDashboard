import React, { Component } from 'react'

import ModalCam from './ModalCam'

import { Table } from 'reactstrap';
import icon from '../../Asset/Icon/icon.svg'

export default class Campaigns extends Component {
    constructor(){
        super();
        this.state={
             data : [
        {
            SlNo: "01",
            name:"aaaaaaaa",
            date:"11/01/20",
            TrackingLinks:"4",
            VIS:"01",
            UNVIS:"2",
            Convs:"00",
            Remarketings:"11",            
            status:"Active",
            action:"",
        },
        {
            SlNo: "02",
            name:"bbbbbbbb",
            date:"10/01/20",
            TrackingLinks:"4",
            VIS:"03",
            UNVIS:"2",
            Convs:"00",
            Remarketings:"09",            
            status:"Active",
            action:"",
          },
          {
            SlNo: "02",
            name:"ccccccccc",
            date:"01/01/20",
            TrackingLinks:"4",
            VIS:"03",
            UNVIS:"2",
            Convs:"00",
            Remarketings:"10",            
            status:"deactive",
            action:"",
          },
          {
            SlNo: "02",
            name:"ddddddd",
            date:"21/01/20",
            TrackingLinks:"4",
            VIS:"03",
            UNVIS:"2",
            Convs:"00",
            Remarketings:"12",            
            status:"Active",
            action:"",
          },
        
      ]
    }
}

    render() {
        return (
                    <div className="padding10">
                    <h3 className="left">Campaigns</h3>
                    <div className="right">
                         <button className="btn "><ModalCam/></button>
                    </div>

                <Table hover responsive className="margin10">
                    <thead>

                   
                         <tr className="colorPurple text-center">
                            <th>SL.No.</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th className="lineHeight12 ">Tracking Links</th>
                            <th>VIS</th>
                            <th>UN.VIS</th>
                            <th>Convs.</th>
                            <th>Remarketings </th>
                            <th>status </th>
                            <th>Action </th>

                        </tr> 
                    </thead>
                    {
                    this.state.data.map((item)=>
                    <tbody className="text-center">
                        <th scope="row"> {item.SlNo}</th>
                        <th >{item.name}</th>
                        <th >{item.date}</th>
                        <th >{item.TrackingLinks}</th>
                        <th >{item.VIS}</th>
                        <th >{item.UNVIS}</th>
                        <th >{item.Convs}</th>
                        <th >{item.Remarketings}</th>
                        <th >{item.status}</th>
                        
                        <th ><img className="shadow" src={icon} alt="Logo" /></th>
                    
                    </tbody>)
                }
     
            </Table>
            </div>
        )
    }
}
