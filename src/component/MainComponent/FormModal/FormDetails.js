import React from 'react'

import { FormGroup, Label, Input,  } from 'reactstrap';



const FormDetails = (props) => {
        
        return (
            <div>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Registation Form" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Page URL</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="e.g. http;//www.example.com" />
                </FormGroup>
                
            </div>
        )
    }

export default FormDetails 

