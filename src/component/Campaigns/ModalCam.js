import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';



const ModalCam= (props) => {
  const {
  
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New Campaigns</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add New Campaigns</ModalHeader>
        <ModalBody>

              <FormGroup>
                <Label for="exampleEmail">Campaign name</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Campaign name" />
            </FormGroup>

            <br></br>

           
            

           <FormGroup>
              <Label for="exampleEmail">Note</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Note" />
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

export default ModalCam;