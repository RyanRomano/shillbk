import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Menu from './Menu/Menu';
import './Main.css';

const Main = () => (
    <div className="mainSection">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/menu' component={Menu}/>
      </Switch>
    </div>
  )
export default Main;