import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModelConversation = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="Editurl">
      <Button color="danger" onClick={toggle}>Add New Conversation </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Conversation </ModalHeader>
        <ModalBody>
         <div className="container-fluid">

                <FormGroup>
                    <Label for="exampleEmail">Friendly name</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter a friendly name" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Notes</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter a note" />
                </FormGroup>

                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Enable postback URL for this conversion </Label>
                </FormGroup>
                <br></br>

                <FormGroup>
                    <Label for="exampleEmail">Select the a!liate network for automatic configuration.</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Manual configuration"/>
                </FormGroup>

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

export default ModelConversation;