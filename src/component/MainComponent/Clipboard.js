import React, { Component } from 'react'

import { Button,  } from 'reactstrap';


export default class Clipboard extends Component {
    render() {
        return (
            <div>
                <br></br>
                
                    <Button className="btn btn-primary right  marginRight10" color="primary" >Add New Site</Button>
               
                <br></br>
                <br></br>
              

                


                <div className="margin10">
                    <h4 className="padding0"><span className="colorBlue">unwrap</span><span> Install Unwrap on your site</span></h4>
                    <p>paste the unwrap code into the head of every you wish to track visitors and collect feedback on, and then verify your installation.</p>
                    <div className="row ">
                        <div className="col-md-9">
                            <div className="colorGray">
                            
                            </div>  
                            <div className="btnSection">
                                <button className="btn btn-pink">Verify installation</button>
                                <span className="colorPink right">Site ID:1672559</span> 
                            </div>                            
                        </div> 
                        
                        <div className="col-md-3">
                            <button className="btn btn-warning ">copy Clipboard</button>
                        </div>
                   
                    </div>

                    
                           
                </div>
            </div>
           
        )
    }
}
