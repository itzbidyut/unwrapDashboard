import React, { Component } from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddNewHotLink extends Component {
    render() {
        return (
            <div>
                
                <h3 className="my-3">Add New HotLink</h3>

                
                <div className="container-fluid bgcolorwhite">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Destination URL</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                                <div className="row">
                                    <div className="col-6">
                                            <FormGroup>
                                                <Label for="exampleEmail">Domain</Label>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    <option>Domain 1</option>
                                                    <option>Domain 2</option>
                                                    <option>Domain 3</option>
                                                    <option>Domain 4</option>
                                                    <option>Domain 5</option>
                                                </Input> 
                                            </FormGroup>                                           
                                    </div>
                                    <div className="col-6">
                                            <Label for="exampleEmail">Alias</Label>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                                                        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                            <FormGroup>
                                                <Label for="exampleEmail">Tag</Label>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                            </FormGroup>                                           
                                    </div>
                                    <div className="col-6">
                                            <FormGroup>
                                                <Label for="exampleEmail">Email</Label>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                            </FormGroup>                                           
                                    </div>

                                </div>
                                <FormGroup>
                                    <Label for="exampleEmail">Campaign</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Default1</option>
                                        <option>Default2</option>
                                        <option>Default3</option>
                                        <option>Default4</option>
                                        <option>Default5</option>
                                        </Input>
                                </FormGroup>
                                
                                
                            </Form>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
