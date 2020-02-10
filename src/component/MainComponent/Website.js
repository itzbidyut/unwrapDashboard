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


export default class Website extends Component {
    render() {
      

        return (
            <Router>
                <div className="container-fluid bgPurple">
                    <div className="row pad0">
                        <div className="col-sm-12 col-md-2 lineHeight25 LIST">
                            <h5 className="colorWhite"> Hot Analytics </h5> 
                        </div>
                        <div className="col-sm-12 col-md-3 lineHeight25 LIST">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>site name 1</option>
                                <option>site name 2</option>
                                <option>site name 3</option>
                                <option>site name 4</option>
                                <option>site name 5</option>
                            </Input>
                        </div>
                        <div className="col-sm-12 col-md-6 LIST iconPack">
                                    <Link to="/">
                                        <div className="IconList">                           
                                                <FontAwesomeIcon classNmae="iconBorder" icon={faClone} />                                                      
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/fire">
                                        <div className="IconList">                                    
                                                <FontAwesomeIcon classNmae="iconBorder" icon={faFire} />                                    
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/filter">
                                        <div className="IconList">                            
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faFilter} />                           
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/video">
                                        <div className="IconList">
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faVideo} />
                                        </div>
                                    </Link>
                                
                                
                                    <Link to="/form">
                                        <div className="IconList">                            
                                            <FontAwesomeIcon classNmae="iconBorder" icon={faStickyNote} />
                                        </div>
                                    </Link>          
                        </div>
                    </div>


                </div>
                

               
                {/* <div className="container-fluid bgpurple">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 lineHeight2 padding10">
                           
                                <h5 className="headingAna"> Hot Analytics </h5>                       
                            
                        </div>
                        <div className="col-sm-12 col-md-3 lineHeight2">
                            <Input type="select" name="select" id="exampleSelect">
                                <option>site name 1</option>
                                <option>site name 2</option>
                                <option>site name 3</option>
                                <option>site name 4</option>
                                <option>site name 5</option>
                            </Input>
                        </div>
                        <div className="col-sm-12 col-md-6 ">
                            <div className="flexLink">
                                
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

 */}

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
