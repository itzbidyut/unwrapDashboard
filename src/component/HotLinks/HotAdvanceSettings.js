import React, { Component } from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import EditURL from './Modal/EditURL';


export default class HotAdvanceSettings extends Component {
    render() {
        return (
            <div>
                <h3 className="my-3">Hot links Advanced Settings</h3>
                <div className="container-fluid bgcolorwhite">
                    <div className="flex">
                        <h5 className="lineHeight22">UTM</h5>
                        <div>
                            <EditURL/>                         
                        </div>
                    </div>
                    
                    <hr></hr>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8">
                        
                            <FormGroup>
                                <Label for="exampleEmail">UTM</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Domain 1</option>
                                    <option>Domain 2</option>
                                    <option>Domain 3</option>
                                    <option>Domain 4</option>
                                    <option>Domain 5</option>
                                </Input> 
                            </FormGroup>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
