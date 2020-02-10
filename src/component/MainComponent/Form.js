import React, { Component } from 'react'


import ModalNote from './ModalNote'

import icon from '../../Asset/Icon/icon.svg'

import { Table } from 'reactstrap';

export default class Form extends Component {
    constructor(){
        super();
        this.state={
             data : [
        {
          SlNo: "01",
          name:"Home page",
          link:"site.com",
          Created:"10 minutes ago",
          Pageviews:"none",
          action:"",
        },
        {
            SlNo: "02",
            name:"My first heatmap",
            link:"site.com",
            Created:"10 minutes ago",
            Pageviews:"none",
            action:"",
          },
          {
            SlNo: "03",
          name:"Contact us page",
          link:"site.com",
          Created:"12 minutes ago",
          Pageviews:"none",
          action:"",
          },
          {
            SlNo: "04",
          name:"About us page",
          link:"site.com",
          Created:"13 minutes ago",
          Pageviews:"none",
          action:"",
          },
        
      ]
    }
}

    render() {
        return (
            <div className="padding10">
                 <div>

                    <div className="right">
                        <button className="btn  marginRight10"><ModalNote/></button>
                    </div>

                    <Table responsive hover  className="margin10">
                    <thead >
                        <tr className="colorPurple">
                            <th>SL.No.</th>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Created</th>
                            <th>Page views</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                    this.state.data.map((item)=>
                    <tbody>
                        <th scope="row"> {item.SlNo}</th>
                        <th >{item.name}</th>
                        <th >{item.link}</th>
                        <th >{item.Created}</th>
                        <th >{item.Pageviews}</th>
                        <th ><img className="shadow" src={icon} alt="Logo" /></th>
                        
                    </tbody>)
                    }

                    </Table>
                    </div>
                    
                                    
            </div>
        )
    }
}
