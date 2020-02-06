import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';



const ModalExample = (props) => {
  const {className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New Site</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Site</ModalHeader>
        <ModalBody>

              <FormGroup>
                <Label for="exampleEmail">Website</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="https://example.com" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">Site Type</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Site Type 1</option>
                <option>Site Type 2</option>
                <option>Site Type 3</option>
                <option>Site Type 4</option>
                <option>Site Type 5</option>
              </Input>
            </FormGroup>

           <FormGroup>
              <Label for="exampleEmail">Site Owner</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Name of the owner" />
            </FormGroup>

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>Add site</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>

      </Modal>
    </div>
  );
}

export default ModalExample;