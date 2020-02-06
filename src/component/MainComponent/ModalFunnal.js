import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'


const ModalFunnal = (props) => {
  const {
  
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New Funnal</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{width: "600px"}}>
        <ModalHeader toggle={toggle}>Add New Funnal</ModalHeader>
        <ModalBody>

              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Name" />
            </FormGroup>

            <br></br>

                    <div className="row">
                        <div className="col-md-5">
                       
                                <FormGroup>
                                    <Label for="exampleEmail">Step name</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="step name" />
                                </FormGroup>
                        </div>
                        <div className="col-md-7">
                            <FormGroup>
                                    <Label for="exampleEmail">Page URL</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="e.g. http;//www.example.com" />
                            </FormGroup>
                        </div>                             
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                       
                                <FormGroup>                                   
                                    <Input type="email" name="email" id="exampleEmail" placeholder="step name" />
                                </FormGroup>
                        </div>
                        <div className="col-md-7">
                            <FormGroup>
                                    
                                    <Input type="email" name="email" id="exampleEmail" placeholder="e.g. http;//www.example.com" />
                            {/* <FontAwesomeIcon classNmae="iconBorder" icon={faPlusSquare} /> */}
                             </FormGroup>
                              
                        </div>                             
                    </div>
            
            
            <br></br>

           <FormGroup>
              <Label for="exampleEmail">Enter the Page Url</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="https://example.com" />
            </FormGroup>

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