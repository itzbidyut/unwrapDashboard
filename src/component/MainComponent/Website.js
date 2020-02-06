import React, { Component } from 'react'

import Clipboard from './Clipboard'
import Heatmap from './Heatmap'
import Filter from './Filter'
import Form from './Form'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

import { Input } from 'reactstrap';

import './website.css'

export default class Website extends Component {
    render() {
        const mystyle = {
            width: "250px", marginLeft:"10px"
          };

        return (
            <Router>
                
                <div className="navbar">
                
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className=" flex4">
                                <h5 className="width200"> Hot Anslytics </h5>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>site name 1</option>
                                    <option>site name 2</option>
                                    <option>site name 3</option>
                                    <option>site name 4</option>
                                    <option>site name 5</option>
                                </Input>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 ">
                            <div className="flex3">
                                
                                    <Link to="/">
                                        <div className="Flexitem">                           
                                                <FontAwesomeIcon classNmae="iconBorder" icon={faClone} />                                                      
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/fire">
                                        <div className="Flexitem">                                    
                                                <FontAwesomeIcon classNmae="iconBorder" icon={faFire} />                                    
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/filter">
                                        <div className="Flexitem">                            
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faFilter} />                           
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/video">
                                        <div className="Flexitem">
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faVideo} />
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/form">
                                        <div className="Flexitem">                            
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faStickyNote} />
                                        </div>
                                    </Link>                               
                            </div>                             
                        </div>
                    </div>
            </div>
            <Switch>
                    <Route exact path="/">
                        <Clipboard/>
                    </Route>
                    <Route path="/fire">
                        <br></br>
                        <Heatmap/>
                    </Route>
                    <Route path="/filter">
                        <br></br>
                         <Filter/> 
                    </Route>
                    <Route path="/form">
                        <br></br>
                         <Form/> 
                    </Route>
            </Switch>
                
                
            
        </Router>
            )
    }
}
