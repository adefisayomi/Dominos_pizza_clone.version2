import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import './App.css';
import Menu from './components/menu/Menu';
import MenuItems from "./components/menu/MenuItems"
import Tracker from './components/tracker/Tracker';
import Deals from './components/deals/Deals';
import Store from './components/stores/Store';
import Location from "./components/stores/Location"
import Signup from './components/users/Signup';
import Checkout from './components/checkout/Checkout';
import Upload from './components/upload-food/Upload';

function App() {
  return (
    <Router> 
    <div className="App">
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/menu" component = {Menu}/>
        <Route path = "/menu/:id" component = {MenuItems}/>
        <Route path = "/tracker" component = {Tracker}/>
        <Route path = "/deals" component = {Deals}/>
        <Route exact path = "/store" component = {Store}/>
        <Route path = "/store/location" component = {Location}/>
        <Route exact path = "/upload" component = {Upload}/>
        <Route path = "/checkout" component = {Checkout}/>
        <Route path = "/signup" component = {Signup}/>
      </Switch>
    </div>
    </Router> 
  );
}

export default App;
