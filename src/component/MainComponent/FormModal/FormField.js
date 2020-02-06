import React from 'react'

import { FormGroup, Label, Input,  } from 'reactstrap';



const FormDetails = (props) => {
        
        return (
            <div>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Phone Number</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Phone Number" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email ID</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email ID" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Company Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Company Name" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Primaryinterest</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Primaryinterest" />
                </FormGroup>
            </div>
        )
    }

export default FormDetails 

