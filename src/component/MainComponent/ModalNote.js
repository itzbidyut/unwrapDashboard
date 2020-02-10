import React, { useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,FormGroup, Label, Input,  } from 'reactstrap';



const ModalNote = (props) => {
    
  const {
    className
  } = props;




  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
     <Button className="btn btn-primary right" color="primary" onClick={toggle}>Add New form</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Add New Form</ModalHeader>
              <ModalBody>

              </ModalBody>

                        <Tabs>
                          <TabList>
                            <div className="flex11">   

                                <Tab className="flexItem11">Form Details</Tab>                  
                                <Tab className="flexItem11">Form Field</Tab>

                            </div>
                           
                          </TabList>
                      
                         <TabPanel className="containerPadding">
                         
                                <FormGroup>
                                  <Label for="exampleEmail">Name</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="e.g. Registration form" />
                                </FormGroup>

                                <FormGroup>
                                  <Label for="exampleEmail">Page Url</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="e.g. http;//www.example.com" />
                                </FormGroup>

                          </TabPanel>
                          <TabPanel className="containerPadding">
                            
                          <FormGroup>
                                  <Label for="exampleEmail">Name</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="e.g. Registration form" />
                                </FormGroup>

                                <FormGroup>
                                  <Label for="exampleEmail">Phone number</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="Phone number" />
                                </FormGroup>

                                
                                <FormGroup>
                                  <Label for="exampleEmail">Email ID</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="Email ID" />
                                </FormGroup>

                                <FormGroup>
                                  <Label for="exampleEmail">Companyname</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="Companyname" />
                                </FormGroup>

                                <FormGroup>
                                  <Label for="exampleEmail">Primary interest</Label>
                                  <Input type="email" name="email" id="exampleEmail" placeholder="Primary interest" />
                                </FormGroup>
                          </TabPanel>
                        </Tabs>
                      
                         


              <ModalFooter>

                <Button color="primary" onClick={toggle}>Save</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>

            </Modal>
    </div>
  );
}

export default ModalNote;