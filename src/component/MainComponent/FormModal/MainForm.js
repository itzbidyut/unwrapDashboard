import React, { Component } from 'react'

import FormDetails from './FormDetails'
import FormField from './FormField'


export default class MainForm extends Component {
    // constructor(){
    //     super();
    //     this.state = {render:'<FormField/>'}
    // }
    // handleClick(compName, e){
        
    //     this.setState({render:compName});        
    // }
    // renderSubComp(){
    //     switch(this.state.render){
    //         case 'FormField': return <FormField/>
    //         case 'FormDetails' : return <FormDetails/>
           
    //     }
    // }
    // render() {
    //     return (
    //         <div>
    //             <div className="App">
    //                 <ul style={{display: 'inline'}}>

    //                     <li onClick={this.handleClick.bind(this, 'FormDetails')}>Form Details</li>
    //                     <li onClick={this.handleClick.bind(this, 'FormField')}>Form Field</li>
                        
                    
    //                 </ul>
    //                 {this.renderSubComp()}
    //             </div>
    //         </div>
    //     )
    // }


    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
                        FormField:true,
                        FormDetails:false,
        };
      }
      handleFormField() {
        this.setState({
            FormField:true,
                     FormDetails:false,});
      }
    
      handleFormDetails() {
        this.setState({
                    FormField:false,
                    FormDetails:true,});
      }


    render() {

        
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
          } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
          }
        

             return (
                 <div>
                     <div className="App">
                         <ul>
                            <h6 onClick={this.state.handleFormField}>form field</h6>
                            <h6 onClick={this.state.handleFormDetails}>form details</h6>
                                                
                         </ul>
                         
                     </div>
                 </div>
             )
         }
}
