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
import PageUnderConstruction from './Pages/PageUnderConstruction/PageUnderConstruction';

function App() {
  return (
    <div className={style.App}>
      <Router>
      <Switch>
          <Route path="/about">
            <AboutPageWrapper/>
          </Route>
          <Route path="/error">
            <PageUnderConstruction/>
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
