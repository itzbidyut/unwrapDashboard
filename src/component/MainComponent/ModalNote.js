import React, { useState } from 'react';

// import MainForm2 from './FormModal/MainForm2'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter   } from 'reactstrap';

import FormDetails from './FormModal/FormDetails'
import FormField from './FormModal/FormField'



const ModalNote = (props) => {
    
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New Note</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{width: "600px"}}>
        <ModalHeader toggle={toggle}>Add New Note</ModalHeader>
        <ModalBody>

{/*         
         <MainForm2/>  */}

        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={toggle}>Save</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter> 

      </Modal>
    </div>
  );
}

export default ModalNote;