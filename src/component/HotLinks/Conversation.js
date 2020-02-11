import React, { Component } from 'react'


import { FormGroup, Label, Input,  } from 'reactstrap';

import ModelConversation from './Modal/ModelConversation'

export default class Conversation extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
            
                <div className="container-fluid bgcolorwhite">
                    <div className="flex">
                        <h5 className="lineHeight22">Conversation</h5>
                        <div>
                            <ModelConversation/>                          
                        </div>
                    </div>
                    
                    <hr></hr>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8">
                        
                            <FormGroup>
                                <Label for="exampleEmail">Conversation</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                        <option>unwrap1</option>
                                        <option>unwrap2</option>
                                        <option>unwrap3</option>
                                        <option>unwrap4</option>
                                        <option>unwrap5</option>
                                </Input>                              
                            </FormGroup>

                            <FormGroup>
                                
                                <Input type="select" name="select" id="exampleSelect">
                                        <option>unwrap1</option>
                                        <option>unwrap2</option>
                                        <option>unwrap3</option>
                                        <option>unwrap4</option>
                                        <option>unwrap5</option>
                                </Input>                             
                            </FormGroup>
                        </div>
                    </div>

                </div>
           
            </div>
        )
    }
}
