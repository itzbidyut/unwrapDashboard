import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {
 
  Switch,
  Route,
 
} from "react-router-dom";

import MainHotAnalytics from './component/MainComponent/MainHotAnalytics'
import Nav from './component/nav/Nav'
import Leftside from './component/leftSide/Leftside'

import Dashboard from './component/Dashboard/Dashboard'
import Campaigns from './component/Campaigns/Campaigns'
import HotLinks from './component/HotLinks/HotLinks'
import AddHotLink from './component/HotLinks/AddHotLink'


import './App.css'

export default class App extends Component {
 
  render() {
    return (
      <div>
       <Nav/> 
        
        <div className="container-fluid main pad0">
          <div className="row">
              <div className="col-lg-2">
                  <Leftside/>
              </div>
              <div className="col-lg-10 zero">
                    
                     
                      <Switch>
                        <Route exact path="/">
                          <Dashboard />
                        </Route>
                        <Route exact path="/campaings">
                          <Campaigns />
                        </Route>
                        <Route exact path="/Hot-links">
                          <HotLinks />
                        </Route>
                        <Route exact path="/hot-Analytics">
                          <MainHotAnalytics />
                        </Route>
                        <Route path="/Hot-links/AddHotLink">
                            <AddHotLink/>
                        </Route>
                      </Switch>
              
              </div>
          </div>
          
        </div>
      </div>
    )
  }
}
