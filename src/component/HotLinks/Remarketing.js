import React, { Component } from 'react'

import { FormGroup, Label, Input,  } from 'reactstrap';


import ModelRemarketing from './Modal/ModelRemarketing'

export default class Remarketing extends Component {
    render() {
        return (
            <div>
                                <br></br>
                <br></br>
            
                <div className="container-fluid bgcolorwhite">
                    <div className="flex">
                        <h5 className="lineHeight22">Remarketing</h5>
                        <div>
                            <ModelRemarketing/>                        
                        </div>
                    </div>
                    
                    <hr></hr>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8">
                        
                            <FormGroup>
                                <Label for="exampleEmail">UTM</Label>
                                
                                    <Input type="email" name="email" id="exampleEmail" placeholder="eg. www.google.com" />
                                                            
                            </FormGroup>
                        
                            <br></br>
                            
                            <FormGroup>
                            <Label for="exampleEmail">Remarketing pixel</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                        <option>Select a pixel 1</option>
                                        <option>Select a pixel 2</option>
                                        <option>Select a pixel 3</option>
                                        <option>Select a pixel 4</option>
                                        <option>Select a pixel 5</option>
                                </Input> 
                                <br></br>
                                <Input type="select" name="select" id="exampleSelect">
                                        <option>Select a pixel 1</option>
                                        <option>Select a pixel 2</option>
                                        <option>Select a pixel 3</option>
                                        <option>Select a pixel 4</option>
                                        <option>Select a pixel 5</option>
                                </Input>                             
                            </FormGroup>
                        </div>
                    </div>

            </div>
            </div>
        )
    }
}
