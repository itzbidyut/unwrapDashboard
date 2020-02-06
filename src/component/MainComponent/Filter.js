import React, { Component } from 'react'

import ModalFunnal from "./ModalFunnal"

import icon from '../../Asset/Icon/icon.svg'

import { Table } from 'reactstrap';


export default class Filter extends Component {
    constructor(){
        super();
        this.state={
             data : [
                {
                    SlNo: "01",
                    name:"Homepagefunnel",
                    Step:"00",
                    Created:"10 minutes ago",         
                    action:"",
                },
                {
                    SlNo: "02",
                    name:"My!rstheatmapfunnel",
                    Step:"02",
                    Created:"13 minutes ago",         
                    action:"",
                },
                {
                    SlNo: "03",
                    name:"Contactuspagefunnel",
                    Step:"23",
                    Created:"15 minutes ago",         
                    action:"",
                },
                {
                    SlNo: "04",
                    name:"Aboutuspagefunnel",
                    Step:"33",
                    Created:"17 minutes ago",         
                    action:"",
                },
                
      ]
    }
}

    render() {
        return (
            <div>
                  <div className="right">
                         <button className="btn  marginRight10"><ModalFunnal/></button>
                    </div>
                <div>
                    <Table hover responsive className="margin10">
                        <thead>
                            <tr className="colorPurple">
                                <th>SL.No.</th>
                                <th>Name</th>
                                <th>Step</th>
                                <th>Created</th>
                                <th>Action</th>
                        </tr>
                        </thead>
                        {
                        this.state.data.map((item)=>
                        <tbody>
                            <th scope="row"> {item.SlNo}</th>
                            <th >{item.name}</th>
                            
                            <th >{item.Step}</th>
                            <th >{item.Created}</th>
                            <th ><img className="shadow" src={icon} alt="Logo" /></th>
                            
                        </tbody>
                        )
                    }
                    </Table>
            </div>
        
    
            </div>
        )
    }
}
