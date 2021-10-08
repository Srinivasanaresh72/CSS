import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import About from './Components/About';
import Contact from './Components/Contact';
import Photos from './Components/Photos';

function Router() {

  return (
    <Switch>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />  
      <Route path="/photos" component={Photos} />   
    </Switch>

  );
}

export default Router;
