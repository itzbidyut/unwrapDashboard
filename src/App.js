import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Nav from './component/nav/Nav'
import Leftside from './component/leftSide/Leftside'
import HotAnalytics from './component/MainComponent/HotAnalytics'
import Website from './component/MainComponent/Website'




import './App.css'

export default class App extends Component {
 
  render() {
    return (
      <div>
       <Nav/> 
        
        <div className="container-fluid main">
          <div className="row">
                <div className="col-lg-2">
                  <Leftside/>
              </div>
              <div className="col-lg-10">
                <div >
                   <HotAnalytics/>
                   <Website/>
                   
                </div>
                 
              </div>
          </div>
          
        </div>
      </div>
    )
  }
}
