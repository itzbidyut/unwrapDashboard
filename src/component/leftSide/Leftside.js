import React, { Component } from 'react'

import {BrowserRouter as Router,
    Link
  } from "react-router-dom";

import './leftSide.css'

export default class Leftside extends Component {
    render() {
        return (
          
                <div className="leftside">
                    <ul>
                        <li> 
                            <Link to="/"> Dashboard </Link>
                        </li>

                        <li>
                            <Link to="/campaings"> Campaigns </Link>
                        </li>

                        <li> 
                            <Link to="/Hot-links">Hot Links</Link> 
                        </li>    

                        <li> 
                            <Link to="/hot-Analytics"> Hot Analytics</Link> 
                        </li> 

                        <li>  
                            <Link to="/CTAs"> CTAs </Link> 
                        </li>
                        <li>   
                            <Link to="/Profiling"> Profiling </Link>
                        </li>
                        <li> 
                            <Link to="/">CTA-Reports</Link>
                        </li>
                        <li> 
                            <Link to="/">Settings</Link>
                        </li>
                        <li>  
                            <Link to="/">Settings</Link>
                        </li>
                    </ul>
                </div>
         
        )
    }
}
