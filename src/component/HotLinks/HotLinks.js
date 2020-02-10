import React, { Component } from 'react'


import { InputGroup, Input } from 'reactstrap';

import PaginationCom from './PaginationCom'


import { Table } from 'reactstrap';
import icon from '../../Asset/Icon/icon.svg'





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

     
        return (<div className="p-4">

        
           
                <h3 className="left">Hot Links</h3>
                <div className="right">
                         <button className="btn">sdf</button>
                </div>
           <br></br>
           <br></br>
         <div className='container-fluid bgcolorwhite'>
             <div>
                  <InputGroup className="width300">                         
                        <Input placeholder="Search" />
                    </InputGroup>
                
             </div>

         </div>
                   
        </div>
        )
    }
}
