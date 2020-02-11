import React, { Component } from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import AddNewHotLink from './AddNewHotLink'
import HotAdvanceSettings from './HotAdvanceSettings'
import Conversation from './Conversation'
import Remarketing from './Remarketing'


export default class AddHotLink extends Component {
    render() {
        return (
            <div className="">
                
                <AddNewHotLink/>

                <HotAdvanceSettings/>                
                
                <Conversation/>
                
                <Remarketing/>
                
                <br></br>
               
               <div className="btn-right">
                   <div>
                        <button className="btn btn-danger">Save</button>
                        <button className="btn btn-danger ml-3">Cancel</button>
                   </div>
               </div>
               
            </div>
        )
    }
}
