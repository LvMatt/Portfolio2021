import React, {useState} from 'react';
import style from './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss'
import AboutPageWrapper from './Wrappers/AboutPageWrapper';
import HomePageWrapper from './Wrappers/HomePageWrapper';
function App() {
  return (
    <div className={style.App}>
      <Router>
      <Switch>
          <Route path="/about">
            <AboutPageWrapper/>
          </Route>
          <Route path="/">
            <HomePageWrapper/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}
export default App;
