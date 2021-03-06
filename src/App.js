import React from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom'
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';

export default class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path ='/' component={LandingPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}