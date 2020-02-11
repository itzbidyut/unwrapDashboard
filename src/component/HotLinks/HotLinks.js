import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import { InputGroup, Input } from 'reactstrap';
import AddHotLink from './AddHotLink'

import { Table } from 'reactstrap';

import PaginationCom from './PaginationCom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faSquareFull } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class HotLinks extends Component {

    
    constructor(){
        super();
        this.state={
             data : [
                    {
                        OriginalURL: "https://www.amazon.in",
                        Created:"15 days ago",
                        ShortLink:"kutt.itnjvgk",
                        Views:"4",
                        
                    },
                    {
                        OriginalURL: "https://www.amazon2.in",
                        Created:"13 days ago",
                        ShortLink:"kutt.itnjvgk",
                        Views:"6",
                    },
                    {
                        OriginalURL: "https://www.amazon3.in",
                        Created:"5 days ago",
                        ShortLink:"kutt.itnjvgk",
                        Views:"14",
                    },
                    {
                        OriginalURL: "https://www.amazon4.in",
                        Created:"18 days ago",
                        ShortLink:"kutt.itnjvgk",
                        Views:"40",
                    },
                ]
            }
        }
    render() {

     
        return (<div className="padding10">

                    <div className="flex my-4">
                        <h3>Hot Links</h3>
                        <div>
                            <Link exect to="/Hot-links/AddHotLink">
                                <button className="btn btn-danger">Add New Hotlink</button>
                            </Link>
                        </div>
                    </div>

                        
          
                        <div className='container-fluid bgcolorwhite'>

                            <div className="flex">

                                <InputGroup className="width300">                         
                                    <Input placeholder="Search" />
                                </InputGroup>

                                <div className="removeP">
                                    <PaginationCom/>                               
                                </div>
                                
                            </div>


                            <Table hover responsive className="margin10">
                                    
                                    <thead>
                                        <tr className="colorPurple">
                                            <th>Original URL</th>
                                            <th>Created</th>
                                            <th>Short Link</th>
                                            <th>Views </th>
                                            <th></th>
                                        </tr> 
                                    </thead>

                                    {
                                    this.state.data.map((item)=>
                                    <tbody className="">
                                    
                                        <th >{item.OriginalURL}</th>
                                        <th >{item.Created}</th>
                                        <th >{item.ShortLink}</th>
                                        <th >{item.Views}</th>
                                        <th >
                                            <FontAwesomeIcon className="mr-2" icon={faClock}/>
                                            <FontAwesomeIcon className="mr-2" icon={ faSquareFull}/>
                                            <FontAwesomeIcon className="colred" icon={ faTrash}/>
                                            
                                        </th>
                                                
                                    </tbody>)
                                }
                    
                            </Table>
                           
                            
                                        {/* <div className="removeP justifyEnd">

                                            <PaginationCom/>

                                        </div> */}

                                
                        </div>
                                {/* <AddHotLink/> */}
                </div>
        )
    }
}
