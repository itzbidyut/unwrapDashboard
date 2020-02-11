import React, { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModelRemarketing = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="Editurl">
      <Button color="danger" onClick={toggle}>Add New ModelRemarketing </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New ModelRemarketing Code </ModalHeader>
        <ModalBody>

             
                    <div className="row">
                        <div className="col-xs-12 col-sm-7">
                            <FormGroup>
                                <Label for="exampleEmail">Name</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Name" />
                            </FormGroup>
                        </div>
                        <div className="col-xs-12 col-sm-5">
                        <FormGroup>
                                <Label for="exampleEmail">Notes</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Notes" />
                            </FormGroup>
                        </div>
                    </div>
                
                <FormGroup>
                    <Label for="exampleEmail">Select a remarketing pixel type</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Select a Pixel" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Pixel ID</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Pixel ID" />
                </FormGroup>

         
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Save</Button>{' '}
          <Button color="" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModelRemarketing;