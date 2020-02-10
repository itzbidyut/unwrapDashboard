import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';



const ModalFunnal = (props) => {
  const {
  
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>


      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New Funnal</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Add New Funnal</ModalHeader>
              <ModalBody>

                    <div className="container">
                    <FormGroup>
                      <Label for="exampleEmail">Name</Label>
                      <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Name" />
                    </FormGroup>
                    </div>

                  <br></br>

                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <FormGroup>
                              <Label for="exampleEmail">Step name</Label>
                              <Input type="email" name="email" id="exampleEmail" placeholder="step name" />
                            </FormGroup>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <FormGroup>
                              <Label for="exampleEmail">Page Url</Label>
                              <Input type="email" name="email" id="exampleEmail" placeholder="https://example.com" />
                            </FormGroup>
                        </div>
                      </div>
                    </div>

                    <div className="container">
                      <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <FormGroup>
                              <Label for="exampleEmail">Step name</Label>
                              <Input type="email" name="email" id="exampleEmail" placeholder="step name" />
                            </FormGroup>
                        </div>
                        <div className="col-md-7 col-sm-12">
                            <FormGroup>
                              <Label for="exampleEmail">Page Url</Label>
                              <Input type="email" name="email" id="exampleEmail" placeholder="https://example.com" />
                            </FormGroup>
                        </div>
                      </div>
                    </div>
                  
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onClick={toggle}>Save</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>

            </Modal>

    </div>
  );
}

export default ModalFunnal;