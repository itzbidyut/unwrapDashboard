import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditURL = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="Editurl">
      <Button color="danger" onClick={toggle}>Add New Hotlink </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
         <div className="container-fluid">
                <FormGroup>
                    <Label for="exampleEmail">UTM template</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="eg. www.google.com" />
                </FormGroup>

                <div className="row">
                    <div className="col-xs-12 col-sm-8">
                        <FormGroup>
                            <Label for="exampleEmail">Campaign source</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="eg. www.google.com" />
                        </FormGroup>
                     
                        <FormGroup>
                            <Label for="exampleEmail">Campaign content</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="eg. www.google.com" />
                        </FormGroup>
                       
                        <FormGroup>
                            <Label for="exampleEmail">Campaign content</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="eg. www.google.com" />
                        </FormGroup>
                    </div>
                </div>
         </div>
         
         
         
         
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Save</Button>{' '}
          <Button color="" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditURL;