import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';



const ModalHeatMap = (props) => {
  const {
  
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New HeatMap</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New HeatMap</ModalHeader>
        <ModalBody>

              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Name" />
            </FormGroup>

            <br></br>

            <div className="flex1">

            
            <FormGroup check className="firstForm">
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    A specific page
                </Label>
            </FormGroup>
        
            <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Similar pages
                </Label>
            </FormGroup>
            
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

export default ModalHeatMap;